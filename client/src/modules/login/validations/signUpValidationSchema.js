import * as yup from 'yup';

const signUpValidationSchema = yup.object({
  name: yup.string().required('Name cannot be empty'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required('Confirm your password')
});

export default signUpValidationSchema;
