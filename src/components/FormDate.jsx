import React, { useEffect, useState } from 'react'
import img from '../images/w1.png'

const FormDate = (props) => {

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [data, setData] = useState('')

  const change = () => props.changeD(true)

  useEffect(() => {
    
    setData(`${day} ${month} ${year}`)

    return props.datos(data)
  },[day, month, year])
  
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
            <strong className='my-3 ms-3 fs-3'>¿Cual es tu fecha de nacimiento?</strong>
            <div className='card-body'>
              <div className="mb-3">
                <input type="number" className="form-control form-control-lg bg-light" value={day} onChange={ (e) => setDay(e.target.value)} placeholder="Dia" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg bg-light" value={month} onChange={ (e) => setMonth(e.target.value)} placeholder="Mes"/>
              </div>
              <div className="mb-3">
                <input type="number" className="form-control form-control-lg bg-light" value={year} onChange={ (e) => setYear(e.target.value)} placeholder="Año"/>
              </div> 
            </div>

          </div>
        </div>
        
        <div className='col-10 offset-2'>
        {day !== '' && month !== '' && year !== '' ? 
          <div onMouseOver={ change()} className="alert bg-primary mt-4 py-4" role="alert">{ `${day} ${month} ${year}` }</div> : '' }
        </div>
      </div>  
    </>
  )
}

export default FormDate