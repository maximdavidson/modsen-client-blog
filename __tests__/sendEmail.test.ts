import { sendEmail } from './../src/utils/sendEmail';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('sendEmail', () => {
  const templateParams = { name: 'John Doe', email: 'john@example.com' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call emailjs.send with correct parameters', async () => {
    const mockSend = emailjs.send as jest.Mock;
    mockSend.mockResolvedValueOnce('Success');

    await sendEmail(templateParams);

    expect(mockSend).toHaveBeenCalledWith(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    );
  });

  it('should throw an error if emailjs.send fails', async () => {
    const mockSend = emailjs.send as jest.Mock;
    const mockError = new Error('Failed to send email');
    mockSend.mockRejectedValueOnce(mockError);

    await expect(sendEmail(templateParams)).rejects.toThrow(
      'Failed to send email',
    );
  });
});
