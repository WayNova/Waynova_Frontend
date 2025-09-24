import emailjs from 'emailjs-com';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_292m1ck';
const TEMPLATE_ID = 'template_9g4635r';
const PUBLIC_KEY = 'Jpm0JZQENzZnCAjWK';

// This function sends an email using EmailJS
export const sendEmail = async ({ firstName, lastName, email }) => {
  const templateParams = {
    first_name: firstName,
    last_name: lastName,
    user_email: email,
    to_email: 'support@waynova.ai', // This ensures the email is sent to support@waynova.ai
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};
