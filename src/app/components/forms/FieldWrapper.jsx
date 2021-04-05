import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl, FormHelperText } from "@material-ui/core";

export default function FieldWrapper({ field, children, error, disableLabel }) {
  const { label, name, help, labelId, type } = field;

  const isSelect = type === "select";

  return (
    <FormControl fullWidth error={!!error}>
      {!disableLabel && (
        <InputLabel
          shrink
          htmlFor={isSelect ? "" : name}
          id={isSelect ? name : ""}
        >
          {label}
        </InputLabel>
      )}
      {children}
      <FormHelperText id="my-helper-text">{error || help}</FormHelperText>
      {/* <InputAdornment /> */}
    </FormControl>
  );
}

FieldWrapper.defaultProps = {
  field: {},
};
