import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import DeleteOutlineIcon from "@material-ui/icons/Delete";
import {
  toggleCartVis,
  addToCart,
  decrementCartItem,
  removeCartItem,
} from "../actions/";
const StyledBadge = withStyles(() => ({
  badge: {
    background: "yellow",
    color: "black",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "-698px",
    left: "-8px",
    right: "-8px",
    padding: theme.spacing(1, 4, 3),
    borderRadius: "20px",
    backgroundColor: "#333",
    color: "#F3F3F3",
    height: "700px",
    transition: theme.transitions.create(["bottom"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 2,
  },
  rootShift: {
    bottom: "-20px",
    transition: theme.transitions.create(["bottom"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  dragger: {
    textAlign: "center",
    margin: "0 0 8px 0",
    cursor: "pointer",
  },
  drag: { display: "block", margin: "0 auto" },
  cartItemsFrame: {
    maxHeight: "300px",
    overflowY: "auto",
    boxShadow: "inset 0px -15px 12px -9px rgba(0,0,0,0.15)",
    margin: "0 0 20px 0",
  },
  cartItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderTop: "1px solid #222",
    padding: "10px 0 0",
  },
  cartItemName: { margin: "10px", width: "100px" },
  cartItemImg: { margin: "10px", width: "40px" },
  iconButtonQty: { color: "yellow", margin: "0 5px" },
  itemDelete: { color: "#CCC", marginLeft: "auto" },
  itemQtyControls: { width: "180px" },
  itemQty: { display: "inline-block", width: "30px", textAlign: "center" },
}));
const Cart = (props) => {
  const {
    addToCart,
    cartTotal,
    decrementCartItem,
    cartItems,
    isOpen,
    removeCartItem,
    toggleCartVis,
  } = props;

  const classes = useStyles();
  const handleDrawerOpen = () => {
    toggleCartVis();
  };

  return (
    <Card
      className={clsx(classes.root, {
        [classes.rootShift]: isOpen,
      })}
    >
      <div className={classes.dragger}>
        <DragHandleIcon onClick={handleDrawerOpen} className={classes.drag} />
        <Typography variant="body2">
          <ShoppingCartIcon /> Shopping Cart
        </Typography>
      </div>

      <CardContent className={classes.cartItemsFrame}>
        {cartItems && cartItems.length ? (
          cartItems.map((item) => {
            return (
              <div className={classes.cartItems} key={`cart-${item.id}`}>
                <div className={classes.cartItemImg}>
                  <StyledBadge
                    badgeContent={`£${item.price}`}
                    color="primary"
                    children={
                      <img width="20" src={item.image_url} alt={item.name} />
                    }
                  />
                </div>
                <div className={classes.cartItemName}>
                  <Typography variant="body2">{item.name}</Typography>
                </div>
                <div className={classes.itemQtyControls}>
                  <IconButton
                    disabled={item.qty === 0 ? true : false}
                    className={classes.iconButtonQty}
                    onClick={() => decrementCartItem(item)}
                    aria-label="remove one"
                    size="small"
                  >
                    <IndeterminateCheckBoxIcon />
                  </IconButton>
                  <b className={classes.itemQty}>{item.qty}</b>
                  <IconButton
                    className={classes.iconButtonQty}
                    onClick={() => addToCart(item)}
                    aria-label="add one"
                    size="small"
                  >
                    <AddBoxIcon />
                  </IconButton>
                </div>

                <IconButton
                  onClick={() => removeCartItem(item)}
                  className={classes.itemDelete}
                  aria-label="remove item"
                  size="small"
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
            );
          })
        ) : (
          <Typography variant="body2">
            Go grab some beers, you deserve it!
          </Typography>
        )}
      </CardContent>
      <Typography variant="h5">Total : £{cartTotal}</Typography>
    </Card>
  );
};

const mapDispatchToProps = {
  toggleCartVis,
  addToCart,
  decrementCartItem,
  removeCartItem,
};

export default connect(null, mapDispatchToProps)(Cart);
