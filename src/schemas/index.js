import * as yup from "yup";

export const BusinessSchema = yup.object().shape({
  companyName: yup
    .string()
    .min(2, "Company Name is too short")
    .required("Company Name is required"),
  businessEmail: yup
    .string()
    .email("Invalid email address")
    .required("Business Email is required"),
  contactPerson: yup
    .string()
    .min(2, "Contact Person is too short")
    .required("Contact Person is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,12}$/, "Invalid phone number format")
    .required("Phone Number is required"),
  industry: yup
    .string()
    .required("Industry is required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions"),
});
export const CustomerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required"),
  lastName: yup
    .string()
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,12}$/, "Invalid phone number format")
    .required("Phone Number is required"),
  dob: yup
    .date()
    .nullable()
    .required("Date of Birth is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid Gender")
    .required("Gender is required"),
  subscribeNewsletter: yup
    .boolean()
    .oneOf([true], "Please accept the cookies"),
});
