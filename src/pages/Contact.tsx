import { ChangeEvent, FormEvent, useState } from "react";
import "../scss/Contact.scss";
import React from "react";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h3>Contact</h3>
      <Form></Form>
    </div>
  );
};
