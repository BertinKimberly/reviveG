import * as yup from "yup";

//login validation

export const LoginValidation = yup.object().shape({
   email: yup.string().email().required("Email is required").trim(),
   password: yup
      .string()
      .password()
      .required("password is required")
      .min(6, "Password must be atleast 6 characters")
      .max(20, "Password must be less than 20 characters")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

//register validation

export const RegisterValidation = yup.object().shape({
   email: yup.string().email().required("Email is required").trim(),
   password: yup
      .string()
      .password()
      .required("password is required")
      .min(6, "Password must be atleast 6 characters")
      .max(20, "Password must be less than 20 characters")
      .matches(/(?=.*[0-9])/),
   fullName: yup
      .string()
      .required("Full name is required")
      .max(20, "Full name must be less than 20 characters")
      .matches(/^[a-zA_Z]*$/, "Full name must contain only letters"),
});
