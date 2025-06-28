// EmailJS Configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
};

// Initialize EmailJS
(function() {
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    } else {
        console.error('EmailJS library not loaded');
    }
})();

// Function to send booking email
async function sendBookingEmail(formData) {
    try {
        // Prepare template parameters
        const templateParams = {
            to_email: 'bookings@tajindiatours.com', // Your company email
            from_name: formData.customerName,
            from_email: formData.customerEmail,
            tour_package: formData.tourPackage,
            travel_date: formData.travelDate,
            travelers: formData.travelers,
            message: formData.message || 'No special requirements',
            booking_id: 'TIT-' + Date.now(), // Generate unique booking ID
            reply_to: formData.customerEmail
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );

        console.log('Booking email sent successfully:', response);
        return response.status === 200;
    } catch (error) {
        console.error('Failed to send booking email:', error);
        throw new Error('Failed to send booking request. Please try again or contact us directly.');
    }
}

// Function to send customer confirmation email (optional)
async function sendCustomerConfirmation(formData) {
    try {
        const templateParams = {
            to_email: formData.customerEmail,
            from_name: 'Taj India Tours',
            customer_name: formData.customerName,
            tour_package: formData.tourPackage,
            travel_date: formData.travelDate,
            travelers: formData.travelers,
            booking_id: 'TIT-' + Date.now(),
            company_email: 'bookings@tajindiatours.com',
            company_phone: '+91 98765 43210'
        };

        // You would need a separate template for customer confirmations
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            'customer_confirmation_template', // Different template ID
            templateParams
        );

        console.log('Customer confirmation sent:', response);
        return response.status === 200;
    } catch (error) {
        console.error('Failed to send customer confirmation:', error);
        // Don't throw error for customer confirmation as it's not critical
        return false;
    }
}

// Export functions for use in main.js
window.sendBookingEmail = sendBookingEmail;
window.sendCustomerConfirmation = sendCustomerConfirmation;