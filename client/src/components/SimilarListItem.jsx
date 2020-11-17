import React from 'react';

const SimilarListItem = ({ game, transformStr }) => (
  <div style={{ transform: transformStr, display: "inline-block", height: "100%", width: "20%", maxWidth: "200px" }}>
    <img src={game.imgUrl} style={{ width: "100%" }} />
    <h4 style={{ margin: "5px auto" }}>${game.price}</h4>
    <h4 style={{ margin: "5px auto", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "80%", padding: "0 10%" }}>{game.item}</h4>
  </div>
);

export default SimilarListItem;