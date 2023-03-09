import './Navbar.css'
import logo from './assets/cart.svg'
import Button from '../Button/Button'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const handleClick = () => {
        console.log('Celulares')
        console.log('otra linea')
    }

    return (
        <nav className="Navbar">
            <div>
                <h1>Ecommerce</h1>
                <img src={logo} alt='logo'/>
            </div>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {/* <button className="btn btn-primary">Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button> */}
                <Button label="Celulares" callback={handleClick}/>
                <Button label="Tablets" callback={() => console.log('Tablets')}/>
                <Button label="Notebooks" callback={() => console.log('Notebooks')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar