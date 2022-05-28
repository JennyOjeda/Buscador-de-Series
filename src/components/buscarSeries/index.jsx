import { useState } from "react"
import { Error } from "../pageError"

const Resume = ()=> <p>Titulo</p>

export const Series = ({data}) => {
/*   const testApiKey = import.meta.env.APP_API_KEY
  console.log(testApiKey) */

  const [isOpen, setIsOpen] = useState(false)

  const toolTip= () =>{
    setIsOpen(true)
  }

  console.log(data)

  return ( 
    <section className="py-3">
      { 
      data && data.length > 0 
      ? (
      <>
        <ul className="row contenedor">
          {
            data.map(serie => (
              <li onMouseEnter={toolTip} key={serie.show.id} className="col-3 py-1">
                {
                  isOpen ? <Resume/>:null
                }
                <article className="card text-light imagen-contenedor" >
                  {/* <abbr title={serie.show.name} > */}
                    <figure>
                      <img className="img-fluid" src={serie.show.image ===null? Error():serie.show.image.medium } alt={serie.show.name} />
                      <div class="efecto">
                        {/* <h6 className="px-1 text-center"> {serie.show.name}</h6>
                        <p className="px-1 text-center"> {serie.show.ended===null ?"En estreno":serie.show.ended}</p>  */}
                         
                      </div>
                    </figure>
                  {/* </abbr> */}
                  
                </article>
              </li>
            ))
          }
        </ul>
      </>
      )
      :null
      }
    </section>
  )
}