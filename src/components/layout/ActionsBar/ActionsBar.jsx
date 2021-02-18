import { Box } from "@material-ui/core";
import React from "react";
import { Button } from "../../UI";

export default function ActionsBar({ actions }) {
  return (
    <Box my={2}>
      {actions.map(({ label, ...rest }) => (
        <Button key={label} {...rest}>
          {label}
        </Button>
      ))}
    </Box>
  );
}
ActionsBar.defaultProps = {
  actions: [],
};
