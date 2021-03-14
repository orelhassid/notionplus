import {
  fade,
  FormControl,
  FormHelperText,
  withStyles,
} from "@material-ui/core";
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const CustomInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background[1],
    // border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function Input({ field, value, onChange, error }) {
  const { label, name, type, help, placeholder } = field;
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <CustomInput
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <FormHelperText id="my-helper-text">{error || help}</FormHelperText>
      {/* <InputAdornment /> */}
    </FormControl>
  );
}
