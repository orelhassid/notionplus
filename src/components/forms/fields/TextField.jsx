import React from "react";
import { TextField as MUITextField } from "@material-ui/core";

export default function TextField({ field, value, onChange, error }) {
  const { label, name, help } = field;

  return (
    <MUITextField
      fullWidth
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="standard"
      error={error}
      helperText={help}
    />
  );
}
