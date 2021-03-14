import { Badge, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
export default function ButtonIcon({
  Icon,
  badgeContent,
  badgeColor,
  to,
  label,
}) {
  return (
    <Tooltip title={label} aria-label="add">
      <IconButton color="inherit" component={Link} to={to}>
        <Badge badgeContent={badgeContent} color={badgeColor}>
          {/* <NotificationsIcon /> */}
          {<Icon />}
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

ButtonIcon.defaultProps = {
  badgeColor: "secondary",
};
