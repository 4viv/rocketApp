import React, { useEffect, useState } from 'react'
import img from '../images/w1.png'

const FormContact = (props) => {

  const [email, setEmail] = useState('')
  const [fon, setFon] = useState('')
  const [data, setData] = useState({})

  const change = () => props.changeC(true)
  
  useEffect(() => {
    
    setData({email, fon})
    return props.datos(data)
  },[email, fon])

  return (
    <>
      <div className='row mt-4'>
        <div className='col-2 '>
          <div className='d-flex'>
            <img className='' src={img} width="90%" alt="algo" />
          </div>
        </div>
        <div className='col-10'>
          <div className='card bg-light mx-1'>
            <strong className='my-3 ms-3 fs-3'>Datos de contacto</strong>
            <div className='card-body'>
              <div className="mb-3">
                <input type="mail" className="form-control form-control-lg bg-light" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="Correo electronico" />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control form-control-lg bg-light" value={fon} onChange={ (e) => setFon(e.target.value)} placeholder="Telefono celular"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='col-10 offset-2'>
        {email !== '' && fon !== ''? 
          <div onMouseOver={ change()} className="alert bg-primary mt-4 py-4" role="alert">
            <span className='d-block lh-sm ms-2'>{ `Correo electronico: ${email}` }</span>
            <span className='d-block lh-sm ms-2'>{ `Telefono celular: ${fon}` }</span>
            </div> : '' }
        </div>
      </div>  
    </>
  )
}

export default FormContact