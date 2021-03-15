import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, filterContact } from "./contacts.actions";

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

export { contacts, filter };
