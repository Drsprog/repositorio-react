import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import {Contador} from './Contador'
import {ListadoApp} from './ListadoApp'
import { UsersApp } from './UsersApp'
import { Users2App } from './Users2App'
import { User3App } from './User3App'
import { UserHook } from './components/UserHook'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User3App/>
  </StrictMode>,
)
