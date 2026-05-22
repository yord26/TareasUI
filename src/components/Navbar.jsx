import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav style={{ background: "#333", padding: "1rem", color: "white", display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>TareasUI</h2>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/formulario" style={{ color: "white", textDecoration: "none" }}>Formulario</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>Acerca de</Link>
      </nav>
    )
  }

  export default Navbar
