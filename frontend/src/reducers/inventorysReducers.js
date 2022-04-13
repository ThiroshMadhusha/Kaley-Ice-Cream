import {
  INVENTORYS_CREATE_FAIL,
  INVENTORYS_CREATE_REQUEST,
  INVENTORYS_CREATE_SUCCESS,
  INVENTORYS_LIST_FAIL,
  INVENTORYS_LIST_REQUEST,
  INVENTORYS_LIST_SUCCESS,
  INVENTORYS_UPDATE_FAIL,
  INVENTORYS_UPDATE_REQUEST,
  INVENTORYS_UPDATE_SUCCESS
} from "../constants/inventorysConstants"


export const inventoryListReducer = (state = { inventorys: [] }, action) => {
  switch (action.type) {
    case INVENTORYS_LIST_REQUEST:
      return { loading: true };
    case INVENTORYS_LIST_SUCCESS:
      return { loading: false, inventorys: action.payload };
    case INVENTORYS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// Create Add(Create) Reducer

export const inventoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INVENTORYS_CREATE_REQUEST:
      return { loading: true };
    case INVENTORYS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case INVENTORYS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// Create Update Reducer

export const inventoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INVENTORYS_UPDATE_REQUEST:
      return { loading: true };
    case INVENTORYS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case INVENTORYS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
