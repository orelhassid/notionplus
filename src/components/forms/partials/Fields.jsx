import { Grid } from "@material-ui/core";
import React from "react";
import { TextField } from "../fields";
import FileField from "../fields/FileField";
import SelectField from "../fields/SelectField";

export default function Fields({
  fields,
  formState,
  errors,
  onChange,
  spacing,
  ...rest
}) {
  const renderFields = (field, value, error) => {
    const { type, id, name } = field;

    switch (type) {
      case "text":
      case "password":
      case "email":
      case "tel":
      case "number":
        return (
          <TextField
            field={field}
            value={value}
            error={error}
            onChange={onChange}
            {...rest}
          />
        );
      case "file":
        return (
          <FileField
            field={field}
            value={value}
            error={error}
            onChange={onChange}
            {...rest}
          />
        );
      case "select":
        return (
          <SelectField
            field={field}
            value={value}
            error={error}
            onChange={onChange}
            {...rest}
          />
        );
      default:
        break;
    }
  };
  return (
    <Grid container justify="center" spacing={spacing || 2}>
      {fields.map((field) => {
        const { name, xs, id } = field;
        const value = formState[name];
        const error = errors[name];

        return (
          <Grid key={id || name} item xs={xs || 12}>
            {renderFields(field, value, error)}
          </Grid>
        );
      })}
    </Grid>
  );
}
