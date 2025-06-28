import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key',
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'contact_template_default'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export interface BookingEmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  phone: string;
  tour_package: string;
  check_in: string;
  travelers: string;
  message?: string;
  booking_id: string;
  total_amount: string;
}

export interface ContactEmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendBookingEmail = async (data: BookingEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      ...data,
      to_email: 'bookings@tajindiatours.com', // Company email
      reply_to: data.from_email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Booking email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send booking email:', error);
    throw new Error('Failed to send booking confirmation. Please try again or contact us directly.');
  }
};

export const sendContactEmail = async (data: ContactEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      ...data,
      to_email: 'info@tajindiatours.com', // Company email
      reply_to: data.from_email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw new Error('Failed to send message. Please try again or contact us directly.');
  }
};

export const sendCustomerConfirmationEmail = async (data: BookingEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      ...data,
      to_email: data.from_email, // Send to customer
      reply_to: 'bookings@tajindiatours.com'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      'customer_confirmation_template',
      templateParams
    );

    console.log('Customer confirmation email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error);
    // Don't throw error for customer confirmation as it's not critical
    return false;
  }
};
