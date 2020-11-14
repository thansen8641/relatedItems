import React from 'react';
import axios from 'axios';
import SimilarList from './SimilarList.jsx';
import Together from './Together.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      similarGames: [],
      togetherGames: []
    }

    this.getSimilarGames = this.getSimilarGames.bind(this);
    this.getTogetherGames = this.getTogetherGames.bind(this);
  }

  getSimilarGames(id) {
    axios.get(`/api/games/${id}/similar`)
      .then((res) => {
        this.setState({
          similarGames: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getTogetherGames(id) {
    axios.get(`/api/games/${id}/together`)
      .then((res) => {
        this.setState({
          togetherGames: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getSimilarGames(this.props.id)
    this.getTogetherGames(this.props.id)
  }

  render() {
    if (this.state.similarGames.length === 0 || this.state.togetherGames.length === 0) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <Together games={this.state.togetherGames} />
          <SimilarList games={this.state.similarGames} />
        </div>
      );
    }
  };
};

export default App;