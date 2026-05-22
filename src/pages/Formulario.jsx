import TareaCard from '../components/TareaCard'

const tareas = [
  { id: 1, titulo: "Estudiar React", descripcion: "Repasar componentes y hooks avanzados." },
  { id: 2, titulo: "Hacer ejercicio", descripcion: "30 minutos de cardio por la mañana." },
  { id: 3, titulo: "Leer un libro", descripcion: "Leer al menos 20 páginas de un libro técnico." },
]

function Formulario() {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Mis Tareas</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {tareas.map(t => (
            <TareaCard key={t.id} titulo={t.titulo} descripcion={t.descripcion} />
          ))}
        </div>
      </div>
    )
  }

  export default Formulario
