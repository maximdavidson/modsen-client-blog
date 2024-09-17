/* eslint-disable import/no-named-as-default-member */
import emailjs from '@emailjs/browser';

interface EmailParams {
  [key: string]: string;
}

export const sendEmail = async (templateParams: EmailParams) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    await emailjs.send(serviceId, templateId, templateParams, userId);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
