import './App.css';
import FormName from './components/FormName';
import FormDate from './components/FormDate'
import FormContact from './components/FormContact'
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  

  const [dateState, setDateState] = useState(false)
  const [contactState, setContactState] = useState(false)
  const [btnState, setBtnState] = useState(false)
  const [sended, setSended] = useState(false)

  const [form1, setForm1] = useState('')
  const [form2, setForm2] = useState('')
  const [form3, setForm3] = useState({})

  const changeState = (e) => setDateState(e)
  const changeStateFormDate = (e) => setContactState(e)
  const changeStateFormContact = (e) => setBtnState(e)

  const sendSessionStorage = () => {
    setSended(true)
    sessionStorage.setItem("name", form1)
    sessionStorage.setItem("date", form2)
    sessionStorage.setItem("email", form3.mail)
    sessionStorage.setItem("fon", form3.fon)
  }

  return (
    <>
      <div className='container-md'> 
        <Header final={changeStateFormContact} />
        <FormName changeH={changeState} datos={(e) => setForm1(e)} />
        {dateState === true ? <FormDate changeD={changeStateFormDate} datos={(e) => setForm2(e)} /> : '' }
        {contactState === true ? <FormContact changeC={changeStateFormContact} datos={(e) => setForm3(e)}/> : '' }
        {btnState === true ? <Footer send={sendSessionStorage} /> : '' }

        {sended === true ? 
        <div className='row mt-3 ms-2'>
          <div className='card bg-primary py-3'>
            <div className='card-body'>
              <span className='d-block lh-sm ms-2'>Fecha de nacimiento: {form2}</span>
              <span className='d-block lh-sm ms-2'>correo Electronico: {form3.email}</span>
              <span className='d-block lh-sm ms-2'>Telefono celular: {form3.fon}</span>
              <span className='d-block lh-sm ms-2'>Nombre: {form1}</span>
            </div>
          </div>
        </div> : ''}
      </div>
    </>
  )
}

export default App;
