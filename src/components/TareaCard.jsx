import '../styles/TareaCard.css'

function TareaCard({ titulo, descripcion }) {
    return (
      <div className="tarea-card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    )
  }

  export default TareaCard
