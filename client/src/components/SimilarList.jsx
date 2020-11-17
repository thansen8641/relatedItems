import React from 'react';
import SimilarListItem from './SimilarListItem.jsx';
import '../../dist/style.css';

class SimilarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translate: 0
    }

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleLeftArrowClick(e) {
    this.setState({
      translate: this.state.translate - 500
    })
  }

  handleRightArrowClick(e) {
    this.setState({
      translate: this.state.translate + 500
    })
  }

  render() {
    const transformStr = `translate(-${this.state.translate}%)`;

    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <h2>Similar Games</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "0px auto"  }}>
          {this.state.translate !== 0 ? <button className="similarArrow" onClick={this.handleLeftArrowClick} style={{ display: "inline-block" }}>&#60;</button> : <div></div> }
          <div className="similar" style={{ whiteSpace: "nowrap", display: "inline-block", maxHeight: "300px", width: "100%", maxWidth: "1200px" }} >
            {this.props.games.map((game) => (
              <SimilarListItem transformStr={transformStr} game={game} />
            ))}
          </div>
            {this.state.translate !== 1500 ? <button className="similarArrow" onClick={this.handleRightArrowClick} style={{ display: "inline-block" }}>&#62;</button> : <div></div> }
        </div>
      </div>
    );
  }
}

export default SimilarList;