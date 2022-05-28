import { useRef, useState } from "react"
import { getSeries } from "../services/getSeries"
import { Series } from "./buscarSeries"

function App () {
  
  const buscarRef = useRef()

  const [data, setData] = useState([])

  const onGetSeries = async(e)=>{
    e.preventDefault()
    //console.log(buscarRef)
    const{value} = buscarRef.current
    const res = await getSeries(value)
    setData(res)
    console.log(res)
  }

  return (
    <section className="container">
      <h4 className="py-4 text-center">Buscador de Series</h4>
      {/* buscador */}
      <form onSubmit={onGetSeries}>
        <div className="input-group mb-3">
          <input ref={buscarRef} required={true} className="form-control" type="text" name="buscador" id="buscador" placeholder="Serie..." />
          <button className='btn btn-primary'>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
      {/* grid de peliculas */}
      <Series data={data}/>
    </section>
  )
}

export default App
