import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

interface BookingDetails {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  price: number;
  duration: string;
}

export async function sendBookingConfirmation(booking: BookingDetails) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Vaibhavi <bookings@vaibhavi.com>',
      to: booking.email,
      subject: 'Booking Confirmation - Vaibhavi Spiritual Services',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed; margin-bottom: 24px;">Booking Confirmation</h1>
          
          <p>Dear ${booking.name},</p>
          
          <p>Thank you for booking a session with Vaibhavi. Your booking has been confirmed!</p>
          
          <div style="background-color: #f3f4f6; padding: 24px; border-radius: 8px; margin: 24px 0;">
            <h2 style="margin-top: 0;">Booking Details</h2>
            
            <p><strong>Service:</strong> ${booking.service}</p>
            <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</p>
            <p><strong>Time:</strong> ${booking.time}</p>
            <p><strong>Duration:</strong> ${booking.duration}</p>
            <p><strong>Amount Paid:</strong> ₹${booking.price}</p>
          </div>
          
          <h3>Preparing for Your Session</h3>
          <ul style="padding-left: 20px;">
            <li>Find a quiet, comfortable space for your session</li>
            <li>Have any specific questions ready</li>
            <li>Ensure you have a stable internet connection</li>
            <li>Join 5 minutes before your scheduled time</li>
          </ul>
          
          <p style="margin-top: 24px;">
            You'll receive a reminder email 24 hours before your session with the meeting link.
          </p>
          
          <p style="margin-top: 24px;">
            If you need to reschedule or have any questions, please contact us at support@vaibhavi.com
          </p>
          
          <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Vaibhavi Spiritual Services<br>
              San Francisco, CA<br>
              support@vaibhavi.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send confirmation email');
    }

    return data;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}

export async function sendReminderEmail(booking: BookingDetails) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Vaibhavi <bookings@vaibhavi.com>',
      to: booking.email,
      subject: 'Reminder: Your Session with Vaibhavi Tomorrow',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed; margin-bottom: 24px;">Session Reminder</h1>
          
          <p>Dear ${booking.name},</p>
          
          <p>This is a reminder about your upcoming session with Vaibhavi tomorrow.</p>
          
          <div style="background-color: #f3f4f6; padding: 24px; border-radius: 8px; margin: 24px 0;">
            <h2 style="margin-top: 0;">Session Details</h2>
            
            <p><strong>Service:</strong> ${booking.service}</p>
            <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</p>
            <p><strong>Time:</strong> ${booking.time}</p>
            <p><strong>Duration:</strong> ${booking.duration}</p>
          </div>
          
          <div style="background-color: #7c3aed; color: white; padding: 24px; border-radius: 8px; margin: 24px 0; text-align: center;">
            <p style="margin: 0; font-size: 18px;">Join your session here:</p>
            <a href="https://meet.vaibhavi.com/session" style="color: white; text-decoration: underline;">
              https://meet.vaibhavi.com/session
            </a>
          </div>
          
          <h3>Preparation Checklist</h3>
          <ul style="padding-left: 20px;">
            <li>Test your camera and microphone</li>
            <li>Find a quiet, private space</li>
            <li>Have your questions ready</li>
            <li>Join 5 minutes early</li>
          </ul>
          
          <p style="margin-top: 24px;">
            If you need to reschedule, please contact us as soon as possible at support@vaibhavi.com
          </p>
          
          <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Vaibhavi Spiritual Services<br>
              San Francisco, CA<br>
              support@vaibhavi.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Failed to send reminder email:', error);
      throw new Error('Failed to send reminder email');
    }

    return data;
  } catch (error) {
    console.error('Error sending reminder email:', error);
    throw error;
  }
}