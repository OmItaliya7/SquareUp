import validator from "validator";

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(formData.email)) {
    errors.email = "Enter a valid email";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  if (formData.services.length === 0) {
  errors.services = "Please select at least one service";
}

  return errors;
};