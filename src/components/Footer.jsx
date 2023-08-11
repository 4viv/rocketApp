import React from 'react'

const Footer = (props) => {
    const send = () => {
        props.send()
    }
  return (
    <div className='row mt-4'>
        <div className='col-9 offset-3'>
            <div className='card bg-ligth my-3'>
                <div className='card-body'>
                    <p className='fs-4 px-2'>Si tus datos son correctos por favor continuemos</p>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-11 offset-1'>
                <div className='d-grid gap-2'>
                    <button onClick={send} className='btn btn-block btn-primary fs-2'>Enviar</button>
                </div>
            </div>
        </div>
        
    </div>
  )
  
}

export default Footer