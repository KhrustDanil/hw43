import { configureStore } from '@reduxjs/toolkit';
import { albumsApi } from '../../data/albums/store';
import { useDispatch, useSelector } from 'react-redux';
import { notesSlice } from '../../data/notes/store';

const store = configureStore({
  reducer: {
    [albumsApi.reducerPath]: albumsApi.reducer,
    notes: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;
