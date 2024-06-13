
import { Toaster } from 'react-hot-toast'
import './App.css'
import Api from './Translator/Api'

function App() {

  return (
    <>
      <Api/>
      <Toaster position='bottom-center'/>
    </>
  )
}

export default App
