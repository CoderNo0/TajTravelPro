// Tour Detail Page JavaScript
let currentTour = null;
const tourDetailContent = document.getElementById('tourDetailContent');
const bookingModal = document.getElementById('bookingModal');
const thankYouModal = document.getElementById('thankYouModal');
const bookingForm = document.getElementById('bookingForm');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadTourDetail();
    setupEventListeners();
});

// Load tour detail based on URL parameter
async function loadTourDetail() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const tourId = urlParams.get('id');
        
        if (!tourId) {
            showError('Tour not found. Please select a tour from our homepage.');
            return;
        }
        
        // Load tours data
        const response = await fetch('assets/json/tours.json');
        const data = await response.json();
        const tour = data.tours.find(t => t.id === tourId);
        
        if (!tour) {
            showError('Tour not found. Please select a valid tour.');
            return;
        }
        
        currentTour = tour;
        renderTourDetail(tour);
        
        // Update page title
        document.title = `${tour.title} - Taj India Tours`;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = tour.description;
        }
        
    } catch (error) {
        console.error('Error loading tour detail:', error);
        showError('Failed to load tour details. Please try again.');
    }
}

// Render tour detail content
function renderTourDetail(tour) {
    tourDetailContent.innerHTML = `
        <div class="tour-hero">
            <div class="container">
                <div class="tour-hero-content">
                    <div class="tour-hero-image">
                        <img src="${tour.image}" alt="${tour.title}">
                        ${tour.badge ? `<div class="tour-badge">${tour.badge}</div>` : ''}
                    </div>
                    <div class="tour-hero-info">
                        <h1 class="tour-hero-title">${tour.title}</h1>
                        <div class="tour-hero-rating">
                            <span class="stars">${generateStars(tour.rating)}</span>
                            <span>${tour.rating}/5 (${tour.reviewCount} reviews)</span>
                        </div>
                        <p class="tour-hero-description">${tour.description}</p>
                        
                        <div class="tour-hero-details">
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span>Duration: ${tour.duration}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Location: ${tour.location}</span>
                            </div>
                        </div>
                        
                        <div class="tour-hero-price">
                            <span class="price-current">$${tour.price}</span>
                            ${tour.originalPrice ? `<span class="price-original">$${tour.originalPrice}</span>` : ''}
                            <span class="price-note">per person</span>
                        </div>
                        
                        ${tour.urgency ? `<div class="urgency-message"><i class="fas fa-fire"></i> ${tour.urgency}</div>` : ''}
                        
                        <div class="tour-hero-actions">
                            <button class="btn-primary btn-large" onclick="openBookingModal('${tour.id}')">
                                <i class="fas fa-calendar-check"></i> Book This Tour Now
                            </button>
                            <button class="btn-secondary" onclick="window.history.back()">
                                <i class="fas fa-arrow-left"></i> Back to Tours
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tour-details-section">
            <div class="container">
                <div class="tour-details-grid">
                    <div class="tour-highlights">
                        <h2><i class="fas fa-star"></i> Tour Highlights</h2>
                        <ul class="highlights-list">
                            ${tour.highlights.map(highlight => `
                                <li><i class="fas fa-check"></i> ${highlight}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="tour-includes">
                        <h2><i class="fas fa-gift"></i> What's Included</h2>
                        <ul class="includes-list">
                            ${tour.includes.map(include => `
                                <li><i class="fas fa-plus"></i> ${include}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="tour-booking-section">
                    <div class="booking-card">
                        <h3>Ready to Book?</h3>
                        <p>Join thousands of satisfied travelers who have experienced this incredible journey.</p>
                        <div class="booking-price">
                            <span class="price">$${tour.price}</span>
                            <span class="price-note">per person</span>
                        </div>
                        <button class="btn-primary btn-large" onclick="openBookingModal('${tour.id}')">
                            <i class="fas fa-paper-plane"></i> Send Booking Request
                        </button>
                        <div class="booking-guarantee">
                            <i class="fas fa-shield-alt"></i>
                            <span>100% Secure Booking • Free Cancellation up to 30 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
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

// Show error message
function showError(message) {
    tourDetailContent.innerHTML = `
        <div class="error-message">
            <div class="container">
                <div class="error-content">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>Oops!</h2>
                    <p>${message}</p>
                    <a href="index.html" class="btn-primary">
                        <i class="fas fa-home"></i> Back to Homepage
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
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
    
    // Set minimum date for travel date input
    const travelDateInput = document.getElementById('travelDate');
    if (travelDateInput) {
        const today = new Date().toISOString().split('T')[0];
        travelDateInput.min = today;
    }
}

// Open booking modal
function openBookingModal(tourId = null) {
    if (currentTour) {
        document.getElementById('tourPackage').value = currentTour.title;
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

// Export functions to global scope
window.openBookingModal = openBookingModal;
window.closeThankYouModal = closeThankYouModal;