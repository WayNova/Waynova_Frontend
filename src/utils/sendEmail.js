// Utility to send form data to Formspree endpoint
// Replace 'your_form_id' with your actual Formspree form ID

export async function sendEmail({ firstName, lastName, email, helpText }) {
  const formId = 'mzbnqzqv'; // Replace with your Formspree form ID if needed
  const endpoint = `https://formspree.io/f/${formId}`;
  const data = {
    firstName,
    lastName,
    email,
    message: helpText,
  };
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
