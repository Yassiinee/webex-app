import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    fontSize: "clamp(0.8rem, 4vw, 1.2rem)",
    padding: "0.8rem 2rem",
    color: "#000",
    background: "#ffb347 linear-gradient(to right, #ffcc33, #ffb347)",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    outline: "none",
  },
});
