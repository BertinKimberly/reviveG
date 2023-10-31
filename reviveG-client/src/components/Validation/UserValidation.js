import * as yup from "yup";

// Create a custom function to validate the password
const passwordValidation = yup
   .string()
   .required("Password is required")
   .min(6, "Password must be at least 6 characters")
   .max(20, "Password must be less than 20 characters")
   .matches(/(?=.*[0-9])/, "Password must contain a number");

// Login validation
export const LoginValidation = yup.object().shape({
   email: yup.string().email().required("Email is required").trim(),
   password: passwordValidation, // Use the custom password validation
});

// Register validation
export const RegisterValidation = yup.object().shape({
   email: yup.string().email().required("Email is required").trim(),
   password: passwordValidation, // Use the custom password validation
   fullName: yup
      .string()
      .required("Full name is required")
      .max(20, "Full name must be less than 20 characters"),
   // .matches(/^[a-zA-Z]*$/, "Full name must contain only letters"),
});

export const ProfileValidation = yup.object().shape({
   fullName: yup
      .string()
      .required("Full name is required")
      .max(20, "Full name must be less than 20 characters")
      .matches(/^[a-zA-Z ]*$/, "Full name must contain only letters"),
   email: yup.string().email().required("Email is required").trim(),
});

export const PasswordValidation = yup.object().shape({
   oldPassword: passwordValidation,
   newPassword: passwordValidation,
   confirmPassword: passwordValidation.oneOf(
      [yup.ref("newPassword"), null],
      "Passwords must match"
   ),
});
