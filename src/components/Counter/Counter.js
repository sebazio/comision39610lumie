import { useState } from 'react'
import Button from '../Button/Button'

const Counter = ({ title, min, max }) => {
    const [count, setCount] = useState(min)
    const [message, setMessage] = useState('')


    const decrement = () => {
        setMessage('')
        if(count > min) { 
            setCount(count => count - 1)
        } else {
            setMessage(`No puede comprar menos de ${min} ${title}`)
        }

    }

    const increment = () => {
        setMessage('')
        if(count < max) {
            setCount(count => count + 1)
        } else {
            setMessage(`No puede comprar mas de ${max} ${title}`)
        }
    }
   
    return (
        <div style={{ margin: 30}}>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <Button callback={decrement} label={'decrementar'}/>
            <Button callback={increment} label={'increment'}/>
            {message !== '' && <p style={{ color: 'red'}}>{message}</p>}
        </div>
    )
}

export default Counter