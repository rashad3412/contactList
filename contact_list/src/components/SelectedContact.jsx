import React from "react";
import { useState } from "react";
import {useEffect} from 'react'


const SelectedContact = props => { 
  const {selectedContactId, setSelectedContactId} = props
  return (
    <>
    <div>{selectedContactId}</div>
    <div>{setSelectedContactId}</div>
    </>
  )
}

export default SelectedContact;