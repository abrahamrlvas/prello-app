import axios from 'axios';
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL, 
  USER_LOGOUT, 
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, 
  USER_REGISTER_FAIL } from "../constants/userConstans";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const { data } = await axios.post('http://localhost:4000/api/v1/login', { username, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('user');
  dispatch({ type: USER_LOGOUT });
}

export const register = (name, lastname, username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post('http://localhost:4000/api/v1/login', { name, lastname, username, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};