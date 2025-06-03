import { SET_NOTES, SET_TABLE_NUMBER } from '../types/basketTypes';

const initialState = {
  notes: '',
  tableNumber: Math.floor(Math.random() * 20) + 1,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, notes: action.payload };
    case SET_TABLE_NUMBER:
      return { ...state, tableNumber: action.payload };
    default:
      return state;
  }
};

export default basketReducer;
