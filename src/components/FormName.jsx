import React, { useEffect, useState } from 'react'
import img from '../images/w1.png'

const FormName = (props) => {

  const [name, setName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [lastName, setLastName] = useState('')
  const [maidenName, setMaidenName] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    
    setData(`${name} ${secondName} ${lastName} ${maidenName}`)
    return props.datos(data)
  },[name, secondName, lastName, maidenName])

  const change = () => props.changeH(true)
  
  
  return (
    <>
      <div className='row mt-5'>
        <div className='col-2 '>
          <div className='d-flex'>
            <img className='position-relative z-n1' src={img} width="90%" alt="algo" />
          </div>
        </div>
        <div className='col-10'>
          <div className='card bg-light mx-1'>
            <strong className='my-3 ms-3 fs-3'>¿Cual es tu Nombre?</strong>
            <div className='card-body'>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg bg-light" value={name} onChange={ (e) => setName(e.target.value)} placeholder="Nombre" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg bg-light" value={secondName} onChange={ (e) => setSecondName(e.target.value)} placeholder="Segundo nombre"/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg bg-light" value={lastName} onChange={ (e) => setLastName(e.target.value)} placeholder="Apellido paterno"/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg bg-light" value={maidenName} onChange={ (e) => setMaidenName(e.target.value)} placeholder="Apellido Materno"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='col-10 offset-2'>
        {name !== '' && lastName !== '' && maidenName !== '' ? 
          <div onMouseOver={change()} className="alert bg-primary mt-4 py-4" >{ `${name} ${secondName} ${lastName} ${maidenName}` }</div> : '' }
        </div>
      </div>  
    </>
  )
}

export default FormName