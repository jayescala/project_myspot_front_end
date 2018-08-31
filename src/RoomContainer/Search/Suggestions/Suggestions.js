import React from 'react'

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

const Suggestions = (props) => {
  console.log(this);
  const suggestions = props.results.tracks.items.map(result => {
    console.log(result.id);
    return  <li className="suggestion-item" key={result.id}>
              <div><img className="album-image" src={result.album.images[0].url}/><h5>{result.album.artists[0].name}</h5></div>
              <h7>Track: {result.name}</h7><br/>
              <h7>Album: {result.album.name}</h7><br/>
              <button name={result.id} onClick={() => props.addTrack(result.id)}>Add</button>
            </li>
  });
  return (
    <ul>
      {suggestions}
    </ul>
  );
}

export default Suggestions;
