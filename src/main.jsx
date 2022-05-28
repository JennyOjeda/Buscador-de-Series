import React from 'react'
//import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client' /* mas directo */

//styles
//los estilos que sobreescriben deben ir al ultimo
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/styles/App.css"

//componentes
import App from '@/components/App'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <>
    <App />
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </>
)
