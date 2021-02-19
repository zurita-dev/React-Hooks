export default function Character(props) {
  return (
    <div className="rounded pb-2">
      <h1>{props.data.name}</h1>
      <img
        className="img-thumbnail"
        src={props.data.image}
        alt="imageCharacter"
      />
      <button type="button" onClick={() => props.onClick(props.data)}>
        Agregar a favoritos
      </button>
    </div>
  );
}
