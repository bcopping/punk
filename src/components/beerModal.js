import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import { addToCart } from "../actions/";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "90%",
    maxWidth: "500px",
    boxShadow: theme.shadows[5],
  },
  root: {
    display: "flex",
    padding: theme.spacing(2, 2, 2),
    borderRadius: "20px",
    backgroundColor: "#333",
    color: "#F3F3F3",
  },
  details: {
    display: "flex",
  },
  content: {
    flex: "3 0 0%",
  },
  cover: {
    flex: "1 0 0%",
    padding: "15px",
    background: "#F3F3F3",
    borderRadius: "20px",
    textAlign: "center",
  },
  coverImage: {
    width: "80%",
  },
}));

const BeerModal = (props) => {
  const { beerID, open, onClose } = props;
  const { food_pairing } = beerID;
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const handleAddToCart = () => {
    const { beerID, addToCart } = props;
    const { name, image_url, id } = beerID;

    let price = Math.floor(Math.random() * 10) + 3;

    addToCart({
      id: id,
      name: name,
      image_url: image_url,
      price: `${price}.99`,
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {beerID.name}
              </Typography>
              <Typography variant="subtitle1">{beerID.tagline}</Typography>
              <Typography variant="body2">{beerID.description}</Typography>
              <Typography variant="body2">
                <b>Tastes great with -</b>
              </Typography>
              <ul>
                {food_pairing &&
                  food_pairing.map((item, index) => (
                    <li key={`mod-${index}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
              </ul>

              <Button variant="contained" onClick={() => handleAddToCart()}>
                Add to cart
              </Button>
            </CardContent>
            <div className={classes.cover}>
              <img
                className={classes.coverImage}
                src={beerID.image_url}
                alt={beerID.name}
              />
            </div>
          </div>
        </Card>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(BeerModal);
