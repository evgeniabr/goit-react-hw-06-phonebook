import React from 'react';
import css from './ContactsList.module.css';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (contacts && filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
    return contacts;
  };

  const filteredContacts = getVisibleContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
}
