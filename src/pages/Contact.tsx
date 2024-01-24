import { ChangeEvent, FormEvent, useState } from "react";
import "../scss/Contact.scss";
import React from "react";

export const Contact = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    setUserInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="contact-wrapper">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Name" />
        <br />

        <input type="email" onChange={handleChange} placeholder="Email" />
        <br />
        <input type="text" placeholder="Subject" />
        <br />
        <textarea name="textbox" cols={30} rows={10}></textarea>
        <br />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};
