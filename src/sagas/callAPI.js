import { call } from "redux-saga/effects";
import axios from "axios";

function convertGetObjectToQueryString(getData) {
  const keys = Object.keys(getData);
  if (!keys.length) return "";
  const qs = Object.keys(getData)
    .map((key) => {
      const rawValue = getData[key];
      const value =
        typeof rawValue === "string" ? rawValue : JSON.stringify(rawValue);
      return `${key}=${encodeURIComponent(value)}`;
    })
    .join("&");
  return `?${qs}`;
}

function* getAxiosObject({ getData, method, uri }) {
  const qs = convertGetObjectToQueryString(getData);
  const url = `https://api.punkapi.com/v2/${uri}${qs}`;
  return {
    method,
    url,
  };
}

export function* callAPI({
  uri = "",
  getData = {},
  onSuccess = () => false,
  onFail = () => false,
  onErrorHandle = null,
  method = "get",
  payload = {},
}) {
  try {
    const axiosConfig = yield getAxiosObject({
      uri,
      getData,
      method,
    });
    const response = yield axios(axiosConfig);
    yield call(onSuccess, response, payload);
  } catch (error) {
    yield call(onFail, error.response, payload);
    if (onErrorHandle) {
      onErrorHandle(error.response, payload);
    } else {
      switch (error.response.data.code) {
        case 400:
          return;

        case 401:
          return;

        case 404:
          return;

        case 500:
          return;
      }
    }
  }
}
