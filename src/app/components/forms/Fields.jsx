import { Grid } from "@material-ui/core";
import React from "react";
import Input from "./Input";
import TextField from "./TextField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import DoubleTextField from "./DoubleTextField";

export default function Fields({ fields, onChange, values, errors }) {
  const renderFields = (field, value, error) => {
    switch (field?.type) {
      case "select":
        return (
          <SelectField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
      case "switch":
        return (
          <SwitchField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
      case "doubleText":
        return (
          <DoubleTextField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );

      default:
        return (
          <TextField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
    }
  };
  return (
    <>
      <Grid container spacing={4}>
        {fields.map((field) => {
          const value = values[field.name];
          const error = errors[field.name];
          const size = field?.xs || 12;
          return (
            <Grid item xs={size} key={field.name}>
              {renderFields(field, value, error)}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
