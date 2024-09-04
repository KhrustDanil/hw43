import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../model/Note.interface';
import { useDispatch, useSelector } from 'react-redux';
import { NoteState } from '../model/NoteState.interface';

const initialState: NoteState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    clearNotes: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, clearNotes } = notesSlice.actions;


const store = configureStore({
  reducer: {
    [notesSlice.name]: notesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;
