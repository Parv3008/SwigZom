import { SET_NOTES, SET_TABLE_NUMBER } from '../types/basketTypes';

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

export const setTableNumber = (tableNumber) => ({
  type: SET_TABLE_NUMBER,
  payload: tableNumber,
});
