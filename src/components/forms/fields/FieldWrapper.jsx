import { Box, Typography } from "@material-ui/core";

import React from "react";
import useStyles from "./styles";

export default function FieldWrapper({
  field,
  error,
  children,
  hideLabel,
  hideFooter,
}) {
  const { label, help, name } = field;
  const classes = useStyles();

  return (
    <Box classes={{ root: classes.container }}>
      {children}

      {!hideLabel && (
        <Typography
          htmlFor={name}
          classes={{ root: classes.label }}
          component="label"
        >
          {label}
        </Typography>
      )}

      {!hideFooter && error ? (
        <Typography classes={{ root: classes.error }}>{error}</Typography>
      ) : (
        <Typography classes={{ root: classes.help }}>{help}</Typography>
      )}
    </Box>
  );
}

FieldWrapper.defaultProps = {
  hideLabel: false,
};

/**
     * 
     <Box display="flex" flexDirection="column">
     <Typography classes={labelClasses} component="label">
     {label}
     </Typography>
     </Box>


         <FormControl fullWidth classes={wrapperClasses}>
      <InputLabel disableAnimation htmlFor={name} classes={labelClasses}>
        {label}
      </InputLabel>
      {children}
      <FormHelperText classes={helpClasses}>{help}</FormHelperText>
    </FormControl>
 * 
 */
