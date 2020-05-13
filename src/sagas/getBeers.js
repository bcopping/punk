import { callAPI } from "./callAPI";
import { put } from "redux-saga/effects";
import * as actions from "../constants/actionTypes";

export function* getBeers({ payload }) {
  const getData = payload;
  let actionType;

  if (getData && getData.food === "pizza") {
    actionType = actions.SET_BEERS_PIZZA;
  }
  if (getData && getData.food === "steak") {
    actionType = actions.SET_BEERS_STEAK;
  }
  if (getData === undefined) {
    actionType = actions.SET_BEERS;
  }

  function* onSuccess(response) {
    yield put({
      type: actionType,
      payload: response.data,
    });
  }
  yield callAPI({
    method: "get",
    uri: `beers`,
    getData,
    onSuccess,
  });
}
