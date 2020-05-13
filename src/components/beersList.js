import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import BeerModal from "./beerModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderColor: "#CCC",
    borderRadius: "20px",
    cursor: "pointer",

    height: "100%",
  },
  beerListItem: {
    padding: theme.spacing(2),
  },
  image: {
    width: "50%",
  },
}));

export default function Beers(props) {
  const [open, setOpen] = useState(false);
  const [beerID, setBeer] = useState({});

  const classes = useStyles();

  const { beers } = props;

  const selectBeer = (beer) => {
    setOpen(true);
    setBeer(beer);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {beers &&
            beers.length &&
            beers.map((beer) => {
              return (
                <Grid key={`grid-${beer.id}`} item xs={4} sm={3} md={2}>
                  <Paper
                    onClick={() => selectBeer(beer)}
                    variant="outlined"
                    className={classes.paper}
                  >
                    <div className={classes.beerListItem}>
                      <img
                        className={classes.image}
                        src={beer.image_url}
                        alt={beer.name}
                      />

                      <Typography variant="body2">{beer.name}</Typography>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </div>
      <BeerModal open={open} onClose={handleClose} beerID={beerID} />
    </Fragment>
  );
}
