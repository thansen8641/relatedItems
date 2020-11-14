import React from 'react';
import SimilarListItem from './SimilarListItem.jsx'

const SimilarList = ({games}) => (
  <div style={{ textAlign: "center", width: "900px", margin: "0px auto"  }}>
    <h2>Similar Games</h2>
    <div style={{ textAlign: "left", width: "3000px", transform: "translate(-100px)" }} >
      {games.map((game) => (
        <SimilarListItem game={game} />
      ))}
    </div>
  </div>
);

export default SimilarList;