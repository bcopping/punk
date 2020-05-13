import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { toggleCartVis } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "0",
    left: "-10px",
    right: "-10px",
    top: "0",
    background: "#000",
    opacity: "0.6",
    zIndex: 1,
  },
}));
const BodyBlock = (props) => {
  const { isOpen, toggleCartVis } = props;

  const classes = useStyles();

  return isOpen ? (
    <div onClick={() => toggleCartVis()} className={classes.root} />
  ) : null;
};

const mapDispatchToProps = {
  toggleCartVis,
};

export default connect(null, mapDispatchToProps)(BodyBlock);
