function TareaCard({ titulo, descripcion }) {
    return (
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", margin: "0.5rem" }}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    )
  }
  
  export default TareaCard