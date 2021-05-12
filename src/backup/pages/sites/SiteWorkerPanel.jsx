import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import Button from "../../components/Button";
import { TextAreaField } from "../../components/forms";
import workerService from "../../services/workerService";
import useSites from "../../hooks/useSites";
import useAlert from "../../hooks/useAlert";
import utils from "../../utils";

export default function SiteWorkerPanel({ currentSite }) {
  const [code, setCode] = useState("");
  const { setAlert } = useAlert();

  useEffect(() => {
    const generatedCode = workerService.generateCode(currentSite);
    setCode(generatedCode);
  }, [currentSite]);

  const handleCopy = () => {
    utils.copyClipboard(code);
    setAlert({
      message: "Copy Worker Code",
    });
  };
  return (
    <Box>
      <Typography>Copy Your Worker Settings</Typography>
      <Button label="Copy" onClick={handleCopy} />
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
