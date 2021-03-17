import React from "react";
import { Box, Typography } from "@material-ui/core";

import Button from "../../components/Button";
export default function SiteWorkerPanel() {
  return (
    <Box>
      <Typography>Copy Your Worker Settings</Typography>
      <Button label="Copy" />
    </Box>
  );
}
