import notification from '../nottification/nottification';

const Signup = form => {
  if (form.name === '') {
    notification('error', 'Name is required');
    return false;
  } else if (form.phoneNumber === '') {
    if (form.countryCode.length > 5) {
      notification('error', 'Phone number is required');
      return false;
    }
    notification('error', 'Phone number is required');
  } else if (form.countryCode === '') {
    notification('error', 'Please select country Name');
    return false;
  } else if (form.password === '') {
    if (form.phoneNumber.length > 6) {
      notification('error', 'Password must be at least 6 characters');
      return false;
    }
    notification('error', 'Password is required');
    return false;
  } else if (form.profilePicture === '') {
    notification('error', 'Please upload profile picture');
    return false;
  } else {
    return true;
  }
};

export const formValidation = {
  Signup,
};
