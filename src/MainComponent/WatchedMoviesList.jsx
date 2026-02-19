import WatchedMovie from "./WatchedMovie.jsx";

function WatchedList({watched, onRemoveWatched}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbId} onRemoveWatched={onRemoveWatched}/>
      ))}
    </ul>
  );
}

export default WatchedList;
