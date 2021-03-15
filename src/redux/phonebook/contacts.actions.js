import { v4 as uuid } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("ADD_CONTACT", ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const removeContact = createAction("REMOVE_CONTACT");

const filterContact = createAction("FILTER_CONTACT");

export { addContact, removeContact, filterContact };
