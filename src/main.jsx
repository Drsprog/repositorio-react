import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import {Contador} from './Contador'
import {ListadoApp} from './ListadoApp'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp/>
  </StrictMode>,
)
