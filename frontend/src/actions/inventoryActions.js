import axios from "axios";
import {
  INVENTORYS_CREATE_FAIL,
  INVENTORYS_CREATE_REQUEST,
  INVENTORYS_CREATE_SUCCESS,
  INVENTORYS_LIST_FAIL,
  INVENTORYS_LIST_REQUEST,
  INVENTORYS_LIST_SUCCESS,
    
} from "../constants/inventorysConstants";

export const listInventorys = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INVENTORYS_LIST_REQUEST, // loading is true
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/inventorys`, config);
    //   if the request is successfull,
    dispatch({
      type: INVENTORYS_LIST_SUCCESS,
        payload: data,
    //   data is passed to the reducer >> userReducer >> userInfo
    });
    //   if the request is fail,
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INVENTORYS_LIST_FAIL,
      payload: message,
    });
  }
};

// Create Inventory Action


export const createInventoryAction =
  (freazerid, ingredients, flavour, temparature, category) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: INVENTORYS_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/inventorys/create`,
        { freazerid, ingredients, flavour, temparature, category },
        config
      );

      dispatch({
        type: INVENTORYS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INVENTORYS_CREATE_FAIL,
        payload: message,
      });
    }
  };