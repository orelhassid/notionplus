import { makeStyles } from "@material-ui/core/styles";
import { ALIGN } from "../../../theme/config";

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
    textAlign: ALIGN,
  },
  title: {
    // fontSize: "2.5rem",
  },
  subtitle: {},
}));
