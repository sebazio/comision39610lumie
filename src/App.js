import './App.css';
import { useRef, useEffect, useState } from 'react'
import logo from './logo.svg'

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div style={{ backgroundColor: 'orange'}}>
//       <h1>{props.title}</h1>
//       {props.children[0]}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <Layout title="Titulo del Layout">
//         <p style={{color: 'white'}}>Esto es un parrafo</p>
//         <p style={{color: 'white'}}>Este es otro parrafo</p>
//       </Layout>
//       <Layout title="Titulo del Layout">
//         <img src={logo} alt='logo'/>
//       </Layout>
//     </div>
//   );
// }

// const App = () => {
//   const [count, setCount] = useState(0)

//   const countRenderRef = useRef(0)
//   console.log(countRenderRef)
//   countRenderRef.current++

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)}>Contar</button>
//       <h2>Cantidad de renders {countRenderRef.current}</h2>
//     </div>
//   )
// }


// const App = () => {
//   const divRef = useRef(0)
//   const handleClick = () => {
//     console.log(divRef)
//     divRef.current.innerHTML = 'Actualizo'
//   }

//   console.log(divRef)
//   return (
//     <div>
//       <div ref={divRef}>Texto Original</div>
//       <button onClick={handleClick}>cambiar texto</button>
//     </div>
//   )
// }

// const Count = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('cambio titulo')
//     document.title = 'Valor del contador: ' + count
  
//     return () => {
//       console.log('limpio titulo')
//       document.title = 'React App'
//     }
//   }, [count])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)}>contar</button>
//     </div>
//   )
// }

// const App = () => {
//   const [view, setView] = useState('image')
//   return (
//     <div>
//       <div>
//         <button onClick={() => setView('count')}>count</button>
//         <button onClick={() => setView('image')}>image</button>
//       </div>
//       {view === 'count' && <Count /> }
//       {view === 'image' && <img src={logo} alt='logo'/> }
//     </div>
//   )
// }

const App = () => {
  const [vueltas, setVueltas] = useState(0)
  const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0)
  const [datosUltimaVuelta, setDatosUltimaVuelta] = useState({})

  useEffect(() => {
    setTiempoEnSegundos(0)
    const intervalId = setInterval(() => {
      setTiempoEnSegundos(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [vueltas])

  const finalizarVuelta = () => {
    setDatosUltimaVuelta({ vuelta: vueltas, tiempo: tiempoEnSegundos})
    setVueltas(prev => prev + 1)
  }
 
  return (
    <div>
      <h1>Vueltas: {vueltas}</h1>
      <h1>Segundos: {tiempoEnSegundos}</h1>
      <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
      <div>
        <h2>Datos ultima vuelta</h2>
        <h3>vuelta: {datosUltimaVuelta.vuelta}</h3>
        <h3>tiempo: {datosUltimaVuelta.tiempo}</h3>
      </div>
    </div>
  )
}

export default App;
