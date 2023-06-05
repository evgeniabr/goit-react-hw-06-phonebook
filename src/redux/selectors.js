export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;

export const getvisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  if (contacts && filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
  return contacts;
};
