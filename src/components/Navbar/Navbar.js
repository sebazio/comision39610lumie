import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Ecommerce</h1>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <button className="btn btn-primary">Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
        </nav>
    )
}

export default Navbar