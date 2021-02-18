import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Button } from "../../UI";
import FieldWrapper from "./FieldWrapper";
import FileBase from "react-file-base64";

// import { useDropzone } from "react-dropzone";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    "& input": {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0,
    },
  },
}));

export default function FileField(props) {
  const { field, value, onChange, error } = props;
  const { label, name, multiline, labelSub, className, ...rest } = field;

  const classes = useStyles();
  const handleChange = (base64) => {
    onChange({ target: { name, value: base64 } });
  };

  return (
    <FieldWrapper field={field} error={error} hideLabel>
      <Box className={classes.container}>
        <Button variant="outlined" component="label">
          {label}
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => handleChange(base64)}
          ></FileBase>
        </Button>
        <Button
          variant="text"
          component="label"
          onClick={() => onChange({ target: { name, value: "" } })}
        >
          Reset
        </Button>
      </Box>
      {value && (
        <Box
          my={1}
          style={{
            background: `url(${value}) no-repeat left center`,
            backgroundSize: "contain",
            height: 200,
          }}
        ></Box>
      )}
    </FieldWrapper>
  );
}
