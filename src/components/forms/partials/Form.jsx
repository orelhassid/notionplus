import React, { useState } from "react";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import Fields from "./Fields";
import { Button } from "../../UI";
import useStyles from "../fields/styles";

export default function Form({
  fields,
  formState,
  setFormState,
  onSubmit,
  onError,
  schema,
  children,
  header,
  footer,
  spacing,
  submitLabel,
}) {
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  const handleValidation = () => {
    const result = schema.validate(formState, { abortEarly: false });
    const { error } = result;
    if (!error) return null;

    console.log("📕 Input Validation Error", result); // Check the Error type for custom message configuration
    const errorsMessages = {};
    for (let item of error.details) errorsMessages[item.path[0]] = item.message;

    return { errorsMessages, result };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errorsMessages, result } = handleValidation() || {};
    // Error object cannot be undefined.

    setErrors(errorsMessages || {});

    if (errorsMessages) {
      return onError(result);
    }

    onSubmit();
  };

  const handleChange = ({ target: input }) => {
    const newData = { ...formState };
    const { name, value } = input;

    if (input.type === "checkbox") {
      const isExist = newData[name].includes(value);
      if (isExist) {
        const index = newData[name].indexOf(value);
        newData[name].splice(index, 1);
      } else {
        newData[name].push(value);
      }
    } else if (input.type === "number") {
      newData[name] = Number(value);
    } else {
      newData[name] = value;
    }

    setFormState(newData);
  };

  const FormHeader = ({ title }) => (
    <Grid item xs={12} classes={{ root: classes.formHeader }}>
      <Box component="header">
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Grid>
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justify="center" alignContent="center">
          <FormHeader title={header.title} />
          <Fields
            fields={fields}
            errors={errors}
            onChange={handleChange}
            formState={formState}
            spacing={spacing}
          />
          <Box>
            <Button type="submit">{submitLabel}</Button>
          </Box>
          <Grid item xs={12} classes={{ root: classes.formChildren }}>
            {children}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

Form.defaultProps = {
  fields: [],
};

/**
 * 
 * 
 *  {footer && (
            <Grid item xs={12}>
              {footer}
            </Grid>
          )}
 */
