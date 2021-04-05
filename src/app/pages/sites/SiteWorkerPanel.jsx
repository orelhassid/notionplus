import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import Button from "../../components/Button";
import { TextAreaField } from "../../components/forms";
import workerService from "../../services/workerService";
import useSites from "../../hooks/useSites";

export default function SiteWorkerPanel({ currentSite }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    const generatedCode = workerService.generateCode(currentSite);
    setCode(generatedCode);
  }, [currentSite]);

  return (
    <Box>
      <Typography>Copy Your Worker Settings</Typography>
      <Button label="Copy" />
      <TextAreaField
        field={{
          label: "Code",
          multiline: true,
        }}
        value={code}
      />
    </Box>
  );
}
