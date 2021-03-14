import React from "react";
import FieldWrapper from "./FieldWrapper";
import Input from "./Input";

export default function TextField({ ...rest }) {
  return (
    <FieldWrapper {...rest}>
      <Input {...rest} />
    </FieldWrapper>
  );
}
