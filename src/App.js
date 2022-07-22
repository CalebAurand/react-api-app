import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
import BoozeCard from './BoozeCard';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrayOfBoozes: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBoozes = res.data;
        this.setState({arrayOfBoozes});
      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ol className="booze-list">{this.state.arrayOfBoozes.map((beer, index)=>(
            <BoozeCard key={index} boozeName={beer.name} image={beer.image_url} firstBrewed={beer.first_brewed} tagline={beer.tagline} abv={beer.abv} desc={beer.description}/>
          ))}</ol>
        </header>
      </div>
    );
  }
};

export default App;
