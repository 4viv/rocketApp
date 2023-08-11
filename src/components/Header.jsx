import React from 'react'
import { useEffect, useState } from 'react';

const Header = (props) => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        let intervalo = setInterval(() => { setContador(contador + 1) },3000)
    
        if (contador > 100) {
          props.final(false)
        }
        return () => clearInterval(intervalo)
        
    },[contador])

    let estilo = {width:`${contador}%`}

  return (
    <>
    <div className='card mt-2'>
      <div className='card-body bg-primary'>
        <div className='row mt-4'>
          <div className='col-10 me-0 pe-0 fs-3'>Titulo de formulario</div>
          <div className='col-2 ps-0 '><i className="fa-solid fa-clipboard-question text-light"></i></div>
        </div>
        <div className='row mt-4 mb-5'>
          <div className='col-sm-12 fs-5'><i className="fa-solid fa-stopwatch me-2"></i> {contador < 100 ? <span>En menos de 5 minutos</span> : <span>Se termino el tiempo</span> } </div>
        </div>      
      </div>
        <div class="progress barh" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-secondary py-0" style={estilo}></div>
      </div>
    </div>
    </>
  )
}

export default Header