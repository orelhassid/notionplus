import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Fields from "./Fields";
import Button from "../Button";

export default function Form({
  fields,
  onSubmit,
  schema,
  formTitle,
  buttons,
  submitLabel,
  submitDisabled,
  newData,
}) {
  const [data, setData] = useState(() => {
    let state = {};
    fields.forEach(
      ({ name, defaultValue }) =>
        (state[name] = defaultValue !== undefined ? defaultValue : "")
    );

    return { ...state, ...newData };
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (!isValid) return;

    setErrors({});
    onSubmit(data);
  };

  const handleChange = ({ target: input }) => {
    setData((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const handleValidation = () => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (!error) return true;

    console.log("📕 Input Validation Error", error);

    let errorsMessages = {};
    error.details.forEach(
      (item) => (errorsMessages[item.path[0]] = item.message)
    );

    setErrors(errorsMessages || {});
    return false;
  };

  return (
    <Box px={4} mx="auto" maxWidth={640}>
      {formTitle && (
        <Box pb={2}>
          <Typography variant="h3">{formTitle}</Typography>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <Fields
          fields={fields}
          onChange={handleChange}
          values={data}
          errors={errors}
        />
        <Box py={2} textAlign="center">
          <Button
            label={submitLabel}
            type="submit"
            variant="contained"
            color="primary"
            textColor="#fff"
            disabled={submitDisabled}
          />
          <Box py={1}>
            {buttons.map(({ button, ...rest }, index) =>
              button ? (
                <React.Fragment key={index}>{button}</React.Fragment>
              ) : (
                <Button key={index} {...rest} />
              )
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
}

Form.defaultProps = {
  buttons: [],
  submitLabel: "Submit",
  submitDisabled: false,
};
