import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';

import css from './APP.module.css';

export function App() {
  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
      <Toaster />
    </div>
  );
}
