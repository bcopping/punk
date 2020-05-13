import { all, fork, takeEvery } from "redux-saga/effects";

import { getBeers } from "./getBeers";

import * as actionTypes from "../constants/actionTypes";

/*-- GET BEERS --*/
function* watchGetBeers() {
  yield takeEvery(actionTypes.GET_BEERS, getBeers);
}

export default function* root() {
  yield all([fork(watchGetBeers)]);
}
