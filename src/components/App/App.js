import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "../Sidebar";
import Content from "../Content";
import Navbar from "../Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Content />
      <Sidebar />
    </div>
  );
}
