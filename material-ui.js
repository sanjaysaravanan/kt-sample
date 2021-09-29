import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, withStyles } from "@material-ui/core";

const CustomButton = withStyles((theme) => ({
  outlined: {
    backgroundColor: "green",
    color: "#fff",
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > h3": {
      margin: theme.spacing(3),
      width: "200px",
      color: "blue",
    },
    "& > button": {
      "&:hover": {
        color: "blue",
      },
    },
  },
  sampleStyle: {
    backgroundColor: "green",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField
        id="filled-basic"
        minRows={4}
        label="Filled"
        variant="filled"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        // classes={{ root: classes.sampleStyle }}
        className={classes.sampleStyle}
      />
      <Button variant="outlined">Sam</Button>
      <h3>Sanjay</h3>
      <CustomButton variant="outlined">Saravanan</CustomButton>
    </form>
  );
}
