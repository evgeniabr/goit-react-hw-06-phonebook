import React from 'react';
import css from './ContactsList.module.css';
import { getvisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/slice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function ContactsList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getvisibleContacts);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button
              className={css.button}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
