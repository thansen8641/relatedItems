import React from 'react';

const SimilarListItem = ({ game }) => (
  <div style={{ display: "inline-block", height: "300px", width: "200px" }}>
    <img src={game.imgUrl} style={{ height: "200px"}} />
    <h4 style={{ textAlign: "center" }}>${game.price}</h4>
    <h4 style={{ textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{game.item}</h4>
  </div>
);

export default SimilarListItem;