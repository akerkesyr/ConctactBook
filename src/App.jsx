import React, { useEffect, useState } from "react";
import AddContact from "./Components/AddContact/AddContact";
import ContactsList from "./Components/ContactsList/ContactsList";
import EditContacts from "./Components/EditContacts/EditContacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter(item => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map(item => {
      if (item.id === newContact.id) {
        return newContact;
      } else {
        return item;
      }
    });
    setContacts(newContactsArray);
    setIsEdit(false);
  }

  useEffect(() => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("contacts");
      setContacts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function closeModal() {
    setIsEdit(false);
  }

  return (
    <>
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
          closeModal={closeModal}
        />
      ) : null}
      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </>
  );
};

export default App;
