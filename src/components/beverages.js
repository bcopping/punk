import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Box from "@material-ui/core/Box";
import Beers from "./beersList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tabs: {
    background: "#333",
    margin: "0 -16px",
  },
}));

const Beverages = (props) => {
  const { beverages } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="beers"
          centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Pizza" {...a11yProps(1)} />
          <Tab label="Steak" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Beers beers={beverages.beers} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Beers beers={beverages.beersPizza} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Beers beers={beverages.beersSteak} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Beverages;
