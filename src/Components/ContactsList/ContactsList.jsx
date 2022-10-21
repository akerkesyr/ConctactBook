import React from "react";
import "./ContactList.css";

const ContactsList = props => {
  // console.log(props);
  return (
    <div className="contactsCard">
      {props.contacts.map((item, index) => (
        <div className="contactInfo" key={item.id}>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <img src={item.pic} alt="picture" />
          <span>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditIndex(index)}>Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
