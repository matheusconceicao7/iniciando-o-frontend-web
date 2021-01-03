import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
const getValidationErrors = (error: ValidationError): Errors => {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    if (err.path) {
      validationErrors[err.path] = err.message;
    }
  });
  return validationErrors;
};
export default getValidationErrors;
