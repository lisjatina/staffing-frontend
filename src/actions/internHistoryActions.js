import axios from "axios";
import { GET_ERRORS, GET_HISTORY, GET_HISTORY_LIST } from "./types";

export const createInternProjectHistory = (internProjectHistory, history) => async dispatch => {
    try {
      await axios.post("http://localhost:9093/api/v1/intern/project/history", internProjectHistory);
      history.push("/frontPage");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };

  export const getInternProjectHistoryList = () => async dispatch => {
    const res = await axios.get("http://localhost:9093/api/v1/intern/project/history");
    dispatch({
      type: GET_HISTORY_LIST,
      payload: res.data
    });
  };

  export const getInternProjectHistoryById = (id, history) => async dispatch => {
    
      const res = await axios.get(`http://localhost:9093/api/v1/intern/project/history/${id}`);
      dispatch({
        type: GET_HISTORY,
        payload: res.data
      });      
    
  };

  export const updateInternProjectHistoryById = (id, history) => async dispatch => {
   
    await axios.put(`http://localhost:9093/api/v1/intern/project/history/${id}`);
    history.push("/frontPage");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
};
