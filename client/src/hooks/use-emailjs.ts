import { useState } from 'react';
import { sendBookingEmail, sendContactEmail, sendCustomerConfirmationEmail, BookingEmailData, ContactEmailData } from '@/lib/emailjs';
import { useToast } from '@/hooks/use-toast';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendBooking = async (data: BookingEmailData) => {
    setIsLoading(true);
    try {
      // Send email to company
      await sendBookingEmail(data);
      
      // Send confirmation to customer (non-blocking)
      sendCustomerConfirmationEmail(data).catch(console.error);
      
      toast({
        title: "Booking Submitted Successfully!",
        description: "We've received your booking request and will contact you within 24 hours with a detailed quote.",
      });
      
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to submit booking. Please try again.';
      toast({
        title: "Booking Submission Failed",
        description: message,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const sendContact = async (data: ContactEmailData) => {
    setIsLoading(true);
    try {
      await sendContactEmail(data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      toast({
        title: "Message Failed to Send",
        description: message,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendBooking,
    sendContact,
    isLoading
  };
};
