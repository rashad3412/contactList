import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SelectedContact = (props) => {
  const name = props.name;
  const email = props.email;
  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
    </>
  );
};

export default SelectedContact;
