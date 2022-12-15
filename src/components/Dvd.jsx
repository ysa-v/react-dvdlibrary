// eslint-disable-next-line import/no-unresolved

function Dvd({title,releaseDate, director, rating, notes }) {
  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      <hr></hr>
      <p>Release Year: {releaseDate}</p>
      <p>Director: {director}</p>
      <p>Rating: {rating}</p>
      <p>Notes: {notes}</p>
    </div>
  );
}

export default Dvd;
