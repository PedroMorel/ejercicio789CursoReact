import React, { useState } from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoPuro from "../pure/contactoPuro";
import ContactForm from "../pure/forms/contactForm";


const ContactoListComponent = props =>{

    const defaultContact = new Contacto('Pedro','Morel','pedromorelperez@hotmail.com', true);
    const defaultContact2 = new Contacto('Pedro2','Morel2','pedromorelperez@hotmail.com', true);
    const defaultContact3 = new Contacto('Pedro3','Morel3','pedromorelperez@hotmail.com', false);

    const [contactos, setContacts] = useState([defaultContact, defaultContact2, defaultContact3])

    //con esta funcion cambiamos el estado de conectado a no conectado y viceversa
    function completeContact(contacto){
        console.log('Complete this Contact', contacto);
        //indexOf nos ayuda a sacar el indice de la tarea que hemos pasado por parametro
        const index = contactos.indexOf(contacto);
        //variable temporal con todas las tareas que tenemos
        const tempContacto = [...contactos];
        //aqui modificamos el estado de conectado a no conectado y viceversa
        tempContacto[index].conectado = !tempContacto[index].conectado
        //We update the state of the component with the new list of contacts and it will update the
        //Iteration of the contacts in order to show the contact updated
        setContacts(tempContacto)
    }

    function deleteContact(contacto){
        console.log('Delete this Contact', contacto);
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto.splice(index,1);
        setContacts(tempContacto)
    }

    function agregarContact(contacto){
        console.log('Delete this Contact', contacto);
        // const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto.push(contacto);
        setContacts(tempContacto)
    }

    return(
        <div>
            <div className="col-12">
                <div className="card">
                    {/* Card Header (title) */}
                    <div className="card-header p-3" style={{backgroundColor: "#002335"}}>
                        <h5>
                         Your Contacto:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px', backgroundColor: "#002e44"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactos.map((contacto, index) => 
                                    { 
                                        return (
                                        <ContactoPuro 
                                            key={index}
                                            contacto={contacto}
                                            complete={completeContact}
                                            remove={deleteContact}
                                            >
                                        </ContactoPuro>
                                        )
                                    } 
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={agregarContact}></ContactForm>
        </div>
        
    )

}

export default ContactoListComponent