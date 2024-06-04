import { defineRule, configure } from "vee-validate";
/* Using '@vee-validate/rules' */
// import { all } from '@vee-validate/rules';
// Object.entries(all).forEach(([name, rule]) => {
//   defineRule(name, rule);
// });

defineRule("required", (value: any) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

defineRule("email", (value: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Invalid email address";
  }
  return true;
});

defineRule("password", (value: any) => {
  if (!value || !value.length) {
    return true;
  }
  // Check for minimum length
  if (value.length < 8) {
    return "Password must be at least 8 characters long";
  }

  // Check for special characters
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialCharacters.test(value)) {
    return "Password must contain at least one special character";
  }

  // Check for uppercase letters
  const uppercaseLetters = /[A-Z]+/;
  if (!uppercaseLetters.test(value)) {
    return "Password must contain at least one uppercase letter";
  }

  // Check for lowercase letters
  const lowercaseLetters = /[a-z]+/;
  if (!lowercaseLetters.test(value)) {
    return "Password must contain at least one lowercase letter";
  }

  // Check for numbers
  const numbers = /\d+/;
  if (!numbers.test(value)) {
    return "Password must contain at least one number";
  }

  // If all conditions are met, the password is valid
  return true;
});

/* ctx: { form: Record<string, any> } */
// defineRule("confirmed", (value: any, [target]: [string], ctx) => {
//   if (value === ctx.form[target]) {
//     return true;
//   }
//   return "Passwords must match";
// });

// OR

defineRule("confirmed", (value: any, [target]: [any]) => {
  if (value === target) {
    return true;
  }
  return "Passwords must match";
});

defineRule("minLength", (value: any, [limit]: [number]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

defineRule("maxLength", (value: any, [limit]: [number]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  if (value.length > limit) {
    return `This field must be no more than ${limit} characters`;
  }
  return true;
});

defineRule("minMax", (value: any, [min, max]: [number, number]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  const numericValue = Number(value);
  if (numericValue < min) {
    return `This field must be greater than ${min}`;
  }
  if (numericValue > max) {
    return `This field must be less than ${max}`;
  }
  return true;
});

defineRule("numeric", (value: any) => {
  if (!value || !value.length) {
    return true;
  }

  if (isNaN(value) || isNaN(parseFloat(value))) {
    return "Input value must be Numeric";
  }
  return true;
});

defineRule("phone", (value: any) => {
  const regex = /^\+?[0-9](?:[0-9 ]{5,}[0-9])$/;
  if (regex.test(value)) {
    return true;
  }

  return "The field must be a valid phone number.";
});

defineRule("url", (value: any) => {
  const regex =
    /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w.-]*)*\/?(#\w*)?(\?\S*)?$/;

  if (regex.test(value)) {
    return true;
  }

  return "The field must be a valid URL.";
});

export default defineNuxtPlugin(() => {
  configure({
    bails: false,
    validateOnInput: true,
    validateOnBlur: true,
    validateOnChange: true,
  });
});
