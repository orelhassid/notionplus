import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

function SelectField({ field, value, onChange, error }) {
  const { options, name, label, help } = field;

  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select value={value} name={name} onChange={onChange} id={name}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error || help}</FormHelperText>
    </FormControl>
  );
}

export default SelectField;
