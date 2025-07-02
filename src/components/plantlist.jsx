export default function PlantList({ plants, onAdd }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <span className="emoji">{plant.image}</span>
          <h3>{plant.name}</h3>
          <button onClick={() => onAdd(plant)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
