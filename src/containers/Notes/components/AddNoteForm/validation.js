export const validateNote = values => {
  const errors = {};
  const requiredFields = [
    'color',
    'noteText',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please Enter ${field}`;
    }
  });

  return errors;
};

