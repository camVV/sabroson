import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import { Description } from './Description';





export const Front = () => {
  return (
    <div className='front'>
   <div className='fondo' >
      <h2>Jordy Producciones Y Eventos</h2>
      <p><Link smooth to="#description"><FaArrowAltCircleDown/></Link></p>   
    </div>
    <div id='description'>
    <Description/>
    </div>
    </div>
  )
}
