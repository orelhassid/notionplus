import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray({ tags }) {
  const classes = useStyles();

  const handleSelect = (chip) => {};

  if (!Array.isArray(tags)) return null;

  return (
    <Box component="ul" className={classes.root}>
      {tags.map((tag, index) => {
        // let icon;

        // if (data.label === "React") {
        //   icon = <TagFacesIcon />;
        // }

        return (
          <li key={index}>
            <Chip
              //   icon={icon}
              label={tag}
              color="secondary"
              onClick={handleSelect}
              //   onDelete={data.label === "React" ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Box>
  );
}

ChipsArray.defaultProps = {
  tags: [],
};
