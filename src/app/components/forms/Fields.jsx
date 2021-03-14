import { Grid } from "@material-ui/core";
import React from "react";
import Input from "./Input";

export default function Fields({ fields, onChange, values, errors }) {
  return (
    <>
      <Grid container spacing={4}>
        {fields.map((field) => {
          const value = values[field.name];
          const error = errors[field.name];
          return (
            <Grid item xs={12} key={field.name}>
              <Input
                field={field}
                onChange={onChange}
                value={value}
                error={error}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
