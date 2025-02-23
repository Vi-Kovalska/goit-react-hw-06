import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const uniqueName = state.items.every(
        (cont) => cont.name.toLowerCase() !== action.payload.name.toLowerCase()
      );
      const uniqueTel = state.items.every(
        (cont) => String(cont.number) !== String(action.payload.number)
      );

      if ((!uniqueName && !uniqueTel) || !uniqueTel) {
        toast.error("This number is already added to contacts");
        return;
      }

      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
