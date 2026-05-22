import '../styles/Home.css'

function Home() {
    return (
      <div>
        <section className="hero-banner">
          <h1>Bienvenido a TareasUI</h1>
          <p>Gestiona tus tareas diarias de forma sencilla y eficiente. Organiza tu trabajo, aumenta tu productividad y nunca olvides una tarea importante.</p>
          <a href="/formulario" className="hero-cta">Comenzar ahora</a>
        </section>
        <div style={{ padding: "2rem" }}>
          <p>Selecciona una opción del menú para empezar.</p>
        </div>
      </div>
    )
  }

  export default Home
