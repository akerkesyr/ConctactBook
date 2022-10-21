import React, { useState } from "react";
import "./AddContact.css";

const AddContact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");

  function handleClick() {
    if (!name.trim() || !email.trim() || !pic.trim()) {
      alert("Заполните поля!!!");
      return;
    }
    let newContact = {
      name,
      email,
      pic,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setEmail("");
    setPic("");
  }

  return (
    <div className="inpAdd">
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
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
};

export default AddContact;
