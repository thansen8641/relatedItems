import React from 'react';
import '../../dist/style.css';

const SimilarListItem = ({ game, transformStr }) => (
  <div className="similarItem" style={{ transform: transformStr, transition: "transform 0.3s ease-in-out", display: "inline-block", height: "100%", width: "20%", maxWidth: "200px" }}>
    <img src={game.imgUrl} style={{ width: "100%" }} />
    <h4 style={{ margin: "5px auto" }}>${game.price}</h4>
    <p style={{ margin: "5px auto", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "80%", padding: "0 10%" }}>{game.item}</p>
  </div>
);

export default SimilarListItem;