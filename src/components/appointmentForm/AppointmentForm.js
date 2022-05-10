import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-UK")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    return setContact(e.target.value);
  }

  const handleChanges = (e) => {
    if (e.target.type === "text") {
      return setTitle(e.target.value)
    }
    if (e.target.type === "date") {
      return setDate(e.target.value)
    }
    if (e.target.type === "time") {
      return setTime(e.target.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChanges} />
      <input type="date" value={date} onChange={handleChanges} min={getTodayString} />
      <input type="time" value={time} onChange={handleChanges } />
      <ContactPicker contacts={contacts} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
