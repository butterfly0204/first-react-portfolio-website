function TestimonialCard({ name, feedback }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{feedback}</p>
    </div>
  );
}

export default TestimonialCard;