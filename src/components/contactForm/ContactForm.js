/* eslint-disable no-useless-escape */

import React from "react";

export const ContactForm = ({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  handleSubmit
}) => {
  const regex = '^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$'

  const handleChange = (e) => {
    if (e.target.type === "text") {
      return setName(e.target.value)
    }
    if (e.target.type === "tel") {
      return setTel(e.target.value)
    }
    if (e.target.type === "email") {
      return setEmail(e.target.value)
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <p>Full Name</p>
      <input type="text" placeholder="John Doe, Bob Smith, etc..." value={name} onChange={handleChange} />
      <p>Phone Number</p>
      <input type="tel" placeholder="+44 12345 12345, etc..." value={tel} pattern={regex} onChange={handleChange} />
      <p>Email Address</p>
      <input type="email" placeholder="john@doe.com, etc..." value={email} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
