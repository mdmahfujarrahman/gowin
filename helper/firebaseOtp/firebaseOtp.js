import { auth } from '../../lib/firebase/firebase.config.js';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import notification from '../nottification/nottification.js';

export function generateRecaptcha() {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: function () {},
      },
    );
  }
}

export const requestOtp = async (phoneNumber, error, isLoading) => {
  try {
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = result;
    isLoading = false;
    notification('success', 'OTP sent successfully');
    error = {
      isError: false,
      message: '',
    };
  } catch (errors) {
    notification('error', errors.message);
    isLoading = false;
    error = {
      isError: true,
      message: errors.message,
    };
  }
  return {
    error,
    isLoading,
  };
};
