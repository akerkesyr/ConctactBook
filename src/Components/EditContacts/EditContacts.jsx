import React, { useState } from "react";
import "./EditContacts.css";

const EditContacts = props => {
  const [name, setName] = useState(props.editContact.name);
  const [email, setEmail] = useState(props.editContact.email);
  const [pic, setPic] = useState(props.editContact.pic);

  function handleSaveClick() {
    if (!name.trim() || !email.trim() || !pic.trim()) {
      alert("Заполните поля!!!");
      return;
    }
    let contact = { ...props.editContact };
    contact.name = name;
    contact.email = email;
    contact.pic = pic;

    props.handleSaveEditedContact(contact);
    setName("");
    setEmail("");
    setPic("");
  }

  return (
    <div id="inpAdd">
      <div id="inpModal">
        <input
          onChange={e => setName(e.target.value)}
          type={"text"}
          placeholder={"Имя"}
          value={name}
        />
        <input
          onChange={e => setEmail(e.target.value)}
          type={"email"}
          placeholder={"email"}
          value={email}
        />
        <input
          onChange={e => setPic(e.target.value)}
          type={"url"}
          placeholder={"url"}
          value={pic}
        />
        <span>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={props.closeModal}>Close</button>
        </span>
      </div>
    </div>
  );
};

export default EditContacts;
