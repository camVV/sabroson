import React from 'react';
import imagencontacto from '../images/fron4.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Description = () => {
  return (
    <div className='description'>
 
        <h2 id="titulo-letra">Jordy Producciones</h2>
        <div className='boxOne'>
        <h2>Eventos</h2>
        <p>Traemos los mejores eventos latinos a Sevilla, prepárate para vivir una experiencia única, con nuestros conciertos disponibles a lo largo del año. Con los mejores artistas del momento.</p>
        </div>
        <div className='imgtextvox1'></div>
    
        <div className='boxTwo'>
        <div className='textbox2'>
        <h2>El Sabroson</h2>
        <p>Disfruta de nuestra discoteca El sabroson. Ubicada en la calle cromo 15. En ella podras disfrutar de nuestro excelente ambiente latino, para que disfrutes con los tuyos de la mejor rumba latina en sevilla. No lo dudes ven a conocernos</p>
        
        </div>
        <div className='imgtextvox2'><img src={imagencontacto}></img></div>
  <div class="skewed"></div>

        </div>

    </div>
  )
}
