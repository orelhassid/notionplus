import React from "react";
import FieldWrapper from "./FieldWrapper";
import Input from "./Input";

export default function TextAreaField({ ...rest }) {
  return (
    <FieldWrapper {...rest}>
      <Input {...rest} />
    </FieldWrapper>
  );
}

TextAreaField.defaultProps = {
  field: {},
};
