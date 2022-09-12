
import PropTypes from 'prop-types'
import {Contacto} from '../../models/contacto.class'


const ContactoPuroComponent = ({contacto, complete, remove }) => {

    
    function contactoConectadoIcon(){
        if(contacto.conectado){
            
            return (<i onClick={() => complete(contacto)} className='bi-toggle-on task-action' style={{color: 'green', cursor: 'pointer'}}></i>)
            
        }else{
          return  (<i onClick={() => complete(contacto)} className='bi-toggle-off task-action' style={{color: 'cyan', cursor: 'pointer'}}></i>)
        }
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{contacto.nombre}</span>
            </th>
            <td>
                <span className="align-middle">{contacto.apellido}</span>
            </td>
            <td>
                <span className="align-middle">{contacto.email}</span>
            </td>
            <td className="align-middle">
                {contactoConectadoIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato', cursor: 'pointer'}} onClick={() => remove(contacto)}></i>
            </td>
        </tr>

    )
}

ContactoPuroComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

}

export default ContactoPuroComponent