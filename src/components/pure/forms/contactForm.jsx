import React from 'react';
import PropTypes from 'prop-types';
// import useRef from "react";
import { useRef } from 'react';
import { Contacto } from '../../../models/contacto.class';

 const ContactForm = ({add}) => {

  const nombreRef = useRef('');
  const apellidoRef = useRef('');
  const emailRef = useRef('');

  function addContact(e){
      e.preventDefault();
      const newContact = new Contacto(
        nombreRef.current.value,
        apellidoRef.current.value,
        emailRef.current.value,
        false
      );
      add(newContact)
  }

  return (
    <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre contacto'/>
        <input ref={apellidoRef} id='inputApellido' type='text' className='form-control form-control-lg' required placeholder='Apellido contacto'/>
        <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email contacto' />
      </div>
      <button type='submit' className='btn' style={{color:"white", backgroundColor: "#002e44"}}>Agregar</button>
    </form>
  )
}

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;