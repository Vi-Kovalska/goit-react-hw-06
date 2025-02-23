import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
    const visibleContacts = contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));
if (visibleContacts.length === 0 && contacts.length !== 0)    toast('Sorry, no match found.');
  return (
    <ul className={s.contactsList}>
      {(visibleContacts ?? contacts).map(cont => <li key={cont.id}><Contact data={cont} className={s.itemContact} /></li>)}
    </ul>
  )
}

export default ContactList