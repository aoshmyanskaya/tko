export const emailValidator = (value) => {
  return {
    isValid: value.search(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== -1,
    errorText: 'Email format is invalid',
  };
};

export const requiredValidator = (value) => {
  return {
    isValid: value.length > 0,
    errorText: 'Field is required',
  }
};

const getFieldErrors = (fieldName, value, validators) => {
  let errors = [];

  validators.forEach((validator) => {
    let validate = validator(value);
    !validate.isValid && errors.push(validate.errorText);
  });

  return errors;
};

const isFormValid = (form) => {
  let isValid = true;

  for (const field in form.fields) {
    if (form.fields[field].errors.length) {
      isValid = false;
    }
  }

  return isValid;
};

const validateField = (form, name, value) => {
  const validators = form.fields[name].validators;

  let newForm = Object.assign(form);
  newForm.fields[name].value = value;
  newForm.fields[name].errors = getFieldErrors(name, value, validators);;
  newForm.valid = isFormValid(newForm);

  return newForm;
};

const validateForm = (form) => {
  let newForm = Object.assign(form);

  for (const fieldName in form.fields) {
    const field = form.fields[fieldName];
    newForm = validateField(form, fieldName, field.value);
  }

  newForm.submitted = true;

  return newForm;
};

const validator = {
  emailValidator: emailValidator,
  requiredValidator: requiredValidator,
  validateField: validateField,
  validateForm: validateForm,
};

export default validator;
