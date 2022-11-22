import { FormGroup, FormGroupInput, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <FormGroupInput {...otherProps} />
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </FormGroup>
  );
};

export default FormInput;
