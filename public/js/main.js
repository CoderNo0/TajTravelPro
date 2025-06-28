// Global variables
let tours = [];
let reviews = [];
let faqs = [];
let currentFilter = 'all';
let maxPrice = 2000;

// DOM Elements
const toursGrid = document.getElementById('toursGrid');
const reviewsContainer = document.getElementById('reviewsContainer');
const faqContainer = document.getElementById('faqContainer');
const bookingModal = document.getElementById('bookingModal');
const thankYouModal = document.getElementById('thankYouModal');
const bookingForm = document.getElementById('bookingForm');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadAllData();
    setupEventListeners();
    setupNavigation();
});

// Load all JSON data
async function loadAllData() {
    try {
        // Load tours data
        const toursResponse = await fetch('assets/json/tours.json');
        const toursData = await toursResponse.json();
        tours = toursData.tours;
        
        // Load reviews data
        const reviewsResponse = await fetch('assets/json/reviews.json');
        const reviewsData = await reviewsResponse.json();
        reviews = reviewsData.reviews;
        
        // Load FAQs data
        const faqsResponse = await fetch('assets/json/faqs.json');
        const faqsData = await faqsResponse.json();
        faqs = faqsData.faqs;
        
        // Render all sections
        renderTours();
        renderReviews();
        renderFAQs();
        populateTourSelect();
        
    } catch (error) {
        console.error('Error loading data:', error);
        showErrorMessage('Failed to load tour data. Please refresh the page.');
    }
}

// Render tours based on current filters
function renderTours() {
    if (!tours.length) {
        toursGrid.innerHTML = '<div class="loading">Loading amazing tours...</div>';
        return;
    }
    
    const filteredTours = tours.filter(tour => {
        const matchesCategory = currentFilter === 'all' || tour.category === currentFilter;
        const matchesPrice = tour.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });
    
    if (filteredTours.length === 0) {
        toursGrid.innerHTML = '<div class="loading">No tours match your current filters.</div>';
        return;
    }
    
    toursGrid.innerHTML = filteredTours.map(tour => `
        <div class="tour-card" data-category="${tour.category}">
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}" loading="lazy">
                ${tour.badge ? `<div class="tour-badge">${tour.badge}</div>` : ''}
            </div>
            <div class="tour-content">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-description">${tour.description}</p>
                
                <div class="tour-details">
                    <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                    <div class="tour-rating">
                        <span class="stars">${generateStars(tour.rating)}</span>
                        <span>${tour.rating} (${tour.reviewCount})</span>
                    </div>
                </div>
                
                <div class="tour-price">
                    <span class="price-current">$${tour.price}</span>
                    ${tour.originalPrice ? `<span class="price-original">$${tour.originalPrice}</span>` : ''}
                </div>
                
                ${tour.urgency ? `<div class="urgency-message"><i class="fas fa-fire"></i> ${tour.urgency}</div>` : ''}
                
                <div class="tour-actions">
                    <a href="tour-detail.html?id=${tour.id}" class="btn-secondary">
                        <i class="fas fa-info-circle"></i> View Details
                    </a>
                    <button class="btn-primary" onclick="openBookingModal('${tour.id}')">
                        <i class="fas fa-calendar-check"></i> Book This Tour
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Render reviews
function renderReviews() {
    if (!reviews.length) {
        reviewsContainer.innerHTML = '<div class="loading">Loading customer reviews...</div>';
        return;
    }
    
    reviewsContainer.innerHTML = reviews.slice(0, 6).map(review => `
        <div class="review-card">
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <small>${review.location}</small>
                </div>
            </div>
            <div class="review-rating">
                ${generateStars(review.rating)}
            </div>
            <p class="review-text">"${review.comment}"</p>
            <small class="review-tour">Tour: ${review.tourName}</small>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    if (!faqs.length) {
        faqContainer.innerHTML = '<div class="loading">Loading frequently asked questions...</div>';
        return;
    }
    
    faqContainer.innerHTML = faqs.map(faq => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(${faq.id})">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer" id="faq-${faq.id}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ accordion
function toggleFAQ(id) {
    const faqItem = document.querySelector(`#faq-${id}`).parentElement;
    const faqAnswer = document.querySelector(`#faq-${id}`);
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
    faqAnswer.classList.toggle('active');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update filter and re-render
            currentFilter = e.target.dataset.filter;
            renderTours();
        });
    });
    
    // Price range slider
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            maxPrice = parseInt(e.target.value);
            priceValue.textContent = maxPrice;
            renderTours();
        });
    }
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
    
    // Booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmission);
    }
    
    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Setup smooth scrolling navigation
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Open booking modal
function openBookingModal(tourId = null) {
    if (tourId) {
        const tour = tours.find(t => t.id === tourId);
        if (tour) {
            document.getElementById('tourPackage').value = tour.title;
        }
    }
    bookingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close all modals
function closeModals() {
    bookingModal.style.display = 'none';
    thankYouModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close thank you modal specifically
function closeThankYouModal() {
    thankYouModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Populate tour select dropdown
function populateTourSelect() {
    const tourSelect = document.getElementById('tourPackage');
    if (tourSelect && tours.length) {
        // Clear existing options except the first one
        tourSelect.innerHTML = '<option value="">Choose a tour...</option>';
        
        // Add tour options
        tours.forEach(tour => {
            const option = document.createElement('option');
            option.value = tour.title;
            option.textContent = `${tour.title} - $${tour.price}`;
            tourSelect.appendChild(option);
        });
    }
}

// Handle booking form submission
async function handleBookingSubmission(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Get form data
        const formData = {
            customerName: document.getElementById('customerName').value,
            customerEmail: document.getElementById('customerEmail').value,
            tourPackage: document.getElementById('tourPackage').value,
            travelDate: document.getElementById('travelDate').value,
            travelers: document.getElementById('travelers').value,
            message: document.getElementById('message').value
        };
        
        // Validate required fields
        if (!formData.customerName || !formData.customerEmail || !formData.tourPackage || !formData.travelDate) {
            throw new Error('Please fill in all required fields.');
        }
        
        // Send booking email
        await window.sendBookingEmail(formData);
        
        // Optionally send customer confirmation
        try {
            await window.sendCustomerConfirmation(formData);
        } catch (confirmError) {
            console.log('Customer confirmation failed, but booking was sent successfully');
        }
        
        // Show success modal
        closeModals();
        thankYouModal.style.display = 'block';
        
        // Reset form
        bookingForm.reset();
        
    } catch (error) {
        console.error('Booking submission error:', error);
        alert(error.message || 'Failed to send booking request. Please try again or contact us directly.');
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Utility functions
function scrollToTours() {
    document.getElementById('tours').scrollIntoView({
        behavior: 'smooth'
    });
}

function showErrorMessage(message) {
    console.error(message);
    // You could implement a toast notification here
}

// Set minimum date for travel date input
document.addEventListener('DOMContentLoaded', () => {
    const travelDateInput = document.getElementById('travelDate');
    if (travelDateInput) {
        const today = new Date().toISOString().split('T')[0];
        travelDateInput.min = today;
    }
});

// Export functions to global scope for inline onclick handlers
window.openBookingModal = openBookingModal;
window.closeThankYouModal = closeThankYouModal;
window.scrollToTours = scrollToTours;