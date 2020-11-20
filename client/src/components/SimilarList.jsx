import React from 'react';
import SimilarListItem from './SimilarListItem.jsx';
import PropTypes from 'prop-types';
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

  handleLeftArrowClick() {
    this.setState({
      translate: this.state.translate - 500
    })
  }

  handleRightArrowClick() {
    this.setState({
      translate: this.state.translate + 500
    })
  }

  render() {
    const transformStr = `translate(-${this.state.translate}%)`;
    let circleOne = 'white';
    let circleTwo = 'white';
    let circleThree = 'white';
    let circleFour = 'white';
    if (this.state.translate === 0) {
      circleOne = 'gray';
      circleTwo = circleThree = circleFour = 'white';
    } else if (this.state.translate === 500) {
      circleTwo = 'gray';
      circleOne = circleThree = circleFour = 'white';
    } else if (this.state.translate === 1000) {
      circleThree = 'gray';
      circleOne = circleTwo = circleFour = 'white';
    } else {
      circleFour = 'gray';
      circleOne = circleTwo = circleThree = 'white';
    }

    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <h2>Similar Games</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "0px auto"  }}>
          {this.state.translate !== 0 ? <button className="similarArrow" onClick={this.handleLeftArrowClick} style={{ display: "inline-block" }}>&#60;</button> : <div></div> }
          <div className="similar" style={{ whiteSpace: "nowrap", display: "inline-block", maxHeight: "300px", width: "100%", maxWidth: "1200px" }} >
            {this.props.games.map((game) => (
              <SimilarListItem transformStr={transformStr} game={game} key={game._id} />
            ))}
          </div>
            {this.state.translate !== 1500 ? <button className="similarArrow" onClick={this.handleRightArrowClick} style={{ display: "inline-block" }}>&#62;</button> : <div></div> }
        </div>
        <div>
          <button className="similarButton" onClick={() => { this.setState({ translate: 0 }) }} style={{ backgroundColor: circleOne, height: "15px", width: "15px", borderRadius: "50%", margin: "0 5px" }} ></button>
          <button className="similarButton" onClick={() => { this.setState({ translate: 500 }) }} style={{ backgroundColor: circleTwo, height: "15px", width: "15px", borderRadius: "50%", margin: "0 5px" }} ></button>
          <button className="similarButton" onClick={() => { this.setState({ translate: 1000 }) }} style={{ backgroundColor: circleThree, height: "15px", width: "15px", borderRadius: "50%", margin: "0 5px" }} ></button>
          <button className="similarButton" onClick={() => { this.setState({ translate: 1500 }) }} style={{ backgroundColor: circleFour, height: "15px", width: "15px", borderRadius: "50%", margin: "0 5px" }} ></button>
        </div>
      </div>
    );
  }
}

SimilarList.propTypes = {
  games: PropTypes.array.isRequired,
}

export default SimilarList;