export function isValidFirstName(firstName) {
  const firstNameRegex = /^[A-Za-z]+$/;
  return firstNameRegex.test(firstName);
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(cleanedPhoneNumber);
  }