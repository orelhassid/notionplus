import { Box, Grid } from "@material-ui/core";
import React from "react";
import FieldWrapper from "./FieldWrapper";
import Input from "./Input";
import TextField from "./TextField";

export default function DoubleTextField({ ...rest }) {
  return <TextField {...rest} />;
}

{
  /* <Grid
container
spacing={4}
style={{
  width: "100%",
}}
>
<Grid item xs={6}>
  <Input {...rest} />
</Grid>
<Grid item xs={6}>
  <Input {...rest} />
</Grid>
</Grid> */
}
