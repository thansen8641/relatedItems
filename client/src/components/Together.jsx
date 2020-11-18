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
    const gameStyle = { display: "inline-block", width: "150px", height: "100%"};
    const nameStyle = { height: "23%", textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" };

    return (
      <div style={{ display: "block", margin: "20px auto", width: "100%" }}>
        <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", maxWidth: "650px", width: "100%", margin: "0px auto" }}>
          <h2 style={{ width: "100%", textAlign: "center"}}>Frequently bought together</h2>
          <div>
            <div style={gameStyle}>
              <div style={{ height: "67%"}}>
                <img src={this.props.games[0].imgUrl} style={{ width: "100%" }} />
              </div>
              <p style={{ textAlign: "center" }}>{this.props.games[0].price}</p>
              <p style={nameStyle}>{this.props.games[0].item}</p>
              <input type="checkbox" checked="checked"></input>
            </div>
            <div style={{ display: "inline-block" }}>&#43;</div>
            <div style={gameStyle}>
              <div style={{ height: "67%"}}>
                <img src={this.props.games[1].imgUrl} style={{ width: "100%" }} />
              </div>
              <p style={{ height: "15%", textAlign: "center" }}>{this.props.games[1].price}</p>
              <p style={nameStyle}>{this.props.games[1].item}</p>
              <input type="checkbox" checked="checked"></input>
            </div>
            <div style={{ display: "inline-block" }} >&#43;</div>
            <div style={gameStyle}>
              <div style={{ height: "67%"}}>
                <img src={this.props.games[2].imgUrl} style={{ width: "100%" }} />
              </div>
              <p style={{ height: "15%", textAlign: "center" }}>{this.props.games[2].price}</p>
              <p style={nameStyle}>{this.props.games[2].item}</p>
              <input type="checkbox" checked="checked"></input>
            </div>
          </div>
        </div>
        <div style={{ height: "15%", textAlign: "center", maxWidth: "900px", margin: "10px auto"  }}>
          Subtotal: ${subtotal} (3 items) <button>Add all 3 to cart</button>
        </div>
      </div>
    );
  };
};

export default Together;