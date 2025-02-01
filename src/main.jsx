import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import {Contador} from './Contador'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador value={0} />
  </StrictMode>,
)
