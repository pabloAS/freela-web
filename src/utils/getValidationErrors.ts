import * as Yup from 'yup'

interface ErrosProps {
  [key: string]: string;

}

export default function getValidationErrors(msgError: Yup.ValidationError): ErrosProps {
  const validationErrors: ErrosProps = {}

  msgError.inner.forEach(error => {
    if (typeof error.path !== 'undefined') {
      validationErrors[error.path] = error.message
    }
    return validationErrors
  })

  return validationErrors;
}