import React from 'react';
import SimilarListItem from './SimilarListItem.jsx'

class SimilarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleLeftArrowClick(e) {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleRightArrowClick(e) {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const first = this.props.games.slice(0, 5);
    const second = this.props.games.slice(5, 10);
    const third = this.props.games.slice(10, 15);
    const fourth = this.props.games.slice(15, 20)
    if (this.state.count === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Similar Games</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1025px", margin: "0px auto"  }}>
            <div style={{ display: "inline-block", textAlign: "left", width: "1000px" }} >
              {first.map((game) => (
                <SimilarListItem game={game} />
              ))}
            </div>
            <button onClick={this.handleRightArrowClick} style={{ display: "inline-block" }}>&#62;</button>
          </div>
        </div>
      );
    } else if (this.state.count === 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Similar Games</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1050px", margin: "0px auto"  }}>
            <button onClick={this.handleLeftArrowClick} style={{ display: "inline-block" }}>&#60;</button>
            <div style={{ display: "inline-block", textAlign: "left", width: "1000px" }} >
              {second.map((game) => (
                <SimilarListItem game={game} />
              ))}
            </div>
            <button onClick={this.handleRightArrowClick} style={{ display: "inline-block" }}>&#62;</button>
          </div>
        </div>
      );
    } else if (this.state.count === 2) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Similar Games</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1050px", margin: "0px auto"  }}>
            <button onClick={this.handleLeftArrowClick} style={{ display: "inline-block" }}>&#60;</button>
            <div style={{ display: "inline-block", textAlign: "left", width: "1000px" }} >
              {third.map((game) => (
                <SimilarListItem game={game} />
              ))}
            </div>
            <button onClick={this.handleRightArrowClick} style={{ display: "inline-block" }}>&#62;</button>
          </div>
        </div>
      );
    } else if (this.state.count === 3) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Similar Games</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1025px", margin: "0px auto"  }}>
            <button onClick={this.handleLeftArrowClick} style={{ display: "inline-block" }}>&#60;</button>
            <div style={{ display: "inline-block", textAlign: "left", width: "1000px" }} >
              {fourth.map((game) => (
                <SimilarListItem game={game} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SimilarList;