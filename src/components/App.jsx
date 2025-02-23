import './App.css'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { useSelector} from "react-redux";
function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <>
        <h1>Phonebook</h1>
        <ContactForm />
      <SearchBox />
      {contacts.length >= 1 && <ContactList/>}
      {contacts.length === 0 && <p>The contact sheet is empty. Add your first contact in the form.</p>}
    </>
  )
}

export default App
