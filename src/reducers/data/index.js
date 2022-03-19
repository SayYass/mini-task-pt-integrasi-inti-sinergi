import {
  ADD_LIST,
  DELETE_LIST,
  GET_LIST,
  UPDATE_LIST,
  CHECKED_LIST,
  
} from "../../action";

const initialState = {
  getListResult: false,
  getListLoading: false,
  getListError: false,

  addResult: false,
  addLoading: false,
  addError: false,

  detailResult: false,

  updateResult: false,
  updateLoading: false,
  updateError: false,

  checkedListResult: false,



  deleteResult: false,
  deleteLoading: false,
  deleteError: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        getListResult: action.payload.data,
        getListLoading: action.payload.loading,
        getListError: action.payload.error,
      };
    case ADD_LIST:
      return {
        ...state,
        addResult: action.payload.data,
        addLoading: action.payload.loading,
        addError: action.payload.error,
      };
    case UPDATE_LIST:
      return {
        ...state,
        updateResult: action.payload.data,
        updateLoading: action.payload.loading,
        updateError: action.payload.error,
      };
    case DELETE_LIST:
      return {
        ...state,
        deleteResult: action.payload.data,
        deleteLoading: action.payload.loading,
        deleteError: action.payload.error,
      };
    case CHECKED_LIST:
      return {
        ...state,
        checkedListResult: action.payload.data,
       
      };
   
    default:
      return state;
  }
};

export default data;
