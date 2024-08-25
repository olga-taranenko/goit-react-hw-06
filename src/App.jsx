import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import data from "./data/data.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    if (savedContacts !== null && savedContacts.contacts.length > 4) {
      return savedContacts.contacts;
    }
    return data;
  });
  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const onAddContact = (newContact) => {
    setContacts((prevContactList) => {
      return [...prevContactList, newContact];
    });
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify({ contacts }));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox handleSearch={setSearchValue} />
      <ContactList
        list={filteredContacts.length > 0 ? filteredContacts : data}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
