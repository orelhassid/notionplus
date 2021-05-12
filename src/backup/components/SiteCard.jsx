import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "./Button";
import { SITES_RT } from "../config/routes";
import AlertDialog from "./feedback/AlertDialog";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SiteCard({ site, onDelete }) {
  const classes = useStyles();

  const { title, description, slug, _id } = site;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          to={`${SITES_RT}/${slug}`}
          label="Manage"
          variant="text"
          color="default"
        />
        <AlertDialog
          onClick={() => onDelete(_id)}
          title="Delete this site?"
          description="All the settings associated with this site will be deleted. Note: this action is permanent"
          confirmLabel="Delete"
        >
          <Button
            size="small"
            label="Delete"
            variant="text"
            color="default"
            // onClick={() => onDelete(_id)}
          />
        </AlertDialog>
      </CardActions>
    </Card>
  );
}
