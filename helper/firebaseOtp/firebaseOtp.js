import { auth } from '../../lib/firebase/firebase.config.js';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function generateRecaptcha() {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: function () {},
      auth,
    });
  }
}

export const requestOtp = async phoneNumber => {
  generateRecaptcha();
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier).tthen(result => {
    window.confirmationResult = result;
  });
};
