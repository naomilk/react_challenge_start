import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts = [], addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  //when the name in form changes, it checks if the name matches any names already in the contacts array which is passed to this component as a prop
  useEffect(() => {
    const isItADuplicate = contacts.some((contact) => {
      return contact.name === name;
    })
    if (isItADuplicate) {
      setIsDuplicate(true);
      alert('This name is already in use.')
    }
  }, [name, contacts, setIsDuplicate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
     addContact(name, tel, email);
     setName('');
     setTel('');
     setEmail('');
   }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setTel={setTel}
          name={name}
          email={email}
          tel={tel}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts} />
      </section>
    </div>
  );
};
