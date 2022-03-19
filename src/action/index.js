import axios from "axios";

export const GET_LIST = "GET_LIST";
export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const CHECKED_LIST = "CHECKED_LIST";
export const CLEAR_CHECKED_LIST = "CLEAR_CHECKED_LIST";

export const getList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    axios
      .get("https://api-nginx-lms.accelego.id/api/v1/hiring")
      .then((res) => {
        dispatch({
          type: GET_LIST,
          payload: {
            loading: false,
            data: res.data.value.hiringTest,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST,
          payload: {
            loading: false,
            data: false,
            error: err,
          },
        });
      });
  };
};

export const addList = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_LIST,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    axios
      .post("https://api-nginx-lms.accelego.id/api/v1/hiring", data)
      .then((res) => {
        dispatch({
          type: ADD_LIST,
          payload: {
            loading: false,
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_LIST,
          payload: {
            loading: false,
            data: false,
            error: err,
          },
        });
      });
  };
};

export const deleteList = (data) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_LIST,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    data.map((id) => {
      axios
        .delete(`https://api-nginx-lms.accelego.id/api/v1/hiring/${id}`)
        .then((res) => {
          dispatch({
            type: DELETE_LIST,
            payload: {
              loading: false,
              data: res.data,
              error: false,
            },
          });
        })
        .catch((err) => {
          dispatch({
            type: DELETE_LIST,
            payload: {
              loading: false,
              data: false,
              error: err,
            },
          });
        });
    });
  };
};

export const checkedList = (id) => {
  return (dispatch) => {
    dispatch({
      type: CHECKED_LIST,
      payload: {
        data: id,
      },
    });
  };
};



export const updateList = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_LIST,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    data.map((id) => {
      axios
        .put(
          `https://api-nginx-lms.accelego.id/api/v1/hiring/${id}/mark-as-arrived`
        )
        .then((res) => {
          dispatch({
            type: UPDATE_LIST,
            payload: {
              loading: false,
              data: res.data,
              error: false,
            },
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_LIST,
            payload: {
              loading: false,
              data: false,
              error: err,
            },
          });
        });
    });
  };
};
