import React from 'react';

class Together extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }

  render() {
    const subtotal = this.props.games[0].price + this.props.games[1].price + this.props.games[2].price;
    const gameStyle = { display: "inline-block", height: "300px", width: "200px" };
    const nameStyle = { textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" };

    return (
      <div>
        <div style={{ textAlign: "center", height: "350px", width: "900px", margin: "0px auto" }}>
          <h2 style={{ textAlign: "center"}}>Frequently bought together</h2>
          <div style={gameStyle}>
            <img src={this.props.games[0].imgUrl} style={{ height: "200px"}} />
            <p style={{ textAlign: "center" }}>{this.props.games[0].price}</p>
            <p style={nameStyle}>{this.props.games[0].item}</p>
            <input type="checkbox" checked="checked"></input>
          </div>
          <div style={{ display: "inline-block", height: "300px", verticalAlign: "middle" }}>&#43;</div>
          <div style={gameStyle}>
            <img src={this.props.games[1].imgUrl} style={{ height: "200px"}} />
            <p style={{ textAlign: "center" }}>{this.props.games[1].price}</p>
            <p style={nameStyle}>{this.props.games[1].item}</p>
            <input type="checkbox" checked="checked"></input>
          </div>
          <div style={{ display: "inline-block", height: "300px", verticalAlign: "middle" }} >&#43;</div>
          <div style={gameStyle}>
            <img src={this.props.games[2].imgUrl} style={{ height: "200px"}} />
            <p style={{ textAlign: "center" }}>{this.props.games[2].price}</p>
            <p style={nameStyle}>{this.props.games[2].item}</p>
            <input type="checkbox" checked="checked"></input>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "900px", margin: "10px auto"  }}>
          Subtotal: ${subtotal} (3 items) <button>Add all 3 to cart</button>
        </div>
      </div>
    );
  };
};

export default Together;