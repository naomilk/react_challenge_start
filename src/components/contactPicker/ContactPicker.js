import React from "react";

export const ContactPicker = ({contacts=[], handleChange}) => {

  return (
    <select onChange={handleChange}>
      <option value='' key='' selected="selected"></option>
      {
        contacts.map((contact, index) => {
          return (
            <option key={index} value={index}>{contact.name}</option>
          )
        })
      }
    </select>
  );
};
