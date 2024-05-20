import { ChangeEvent, FormEvent, useState } from "react";
import "../scss/Contact.scss";
import React from "react";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h3>Contact</h3>
      <p className="contact-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis non
        quis reiciendis quibusdam id quia omnis provident molestias saepe! Quos
        provident earum, nostrum alias quo omnis! Officiis asperiores dolor
        accusamus!
      </p>
      <Form></Form>
    </div>
  );
};
