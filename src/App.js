import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
import BoozeCard from './BoozeCard';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrayOfBoozes: [],
      likedArray: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBoozes = res.data;
        this.setState({arrayOfBoozes});
      })
  }

  likeAction = (index) => {
    console.log("like button clicked", index);
    let likedArrayCopy = [];
    let likedBooze = this.state.arrayOfBoozes[index];
    likedArrayCopy.splice(index, 1, likedBooze);
    console.log("likedBooze", likedArrayCopy);
    this.setState({likedArray: [...this.state.likedArray, likedBooze]});
  }

  isLiked = (index) => {
    setTimeout(()=>{
        let boozeArray = this.state.arrayOfBoozes;
        let likedArrayCopy = this.state.likedArray;
        let filterResult = likedArrayCopy.find(el=>el===boozeArray[index]);
        if(filterResult){
          console.log("isLiked is true")
          return true;
        } else {
          console.log("isLiked is false")
          return false;
        }
      }, 50);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ol className="booze-list">{this.state.arrayOfBoozes.map((beer, index)=>(
            <BoozeCard key={index} index={index} boozeName={beer.name} image={beer.image_url} firstBrewed={beer.first_brewed} tagline={beer.tagline} abv={beer.abv} desc={beer.description} likeAction={this.likeAction} isLiked={this.isLiked} />
          ))}</ol>
        </header>
      </div>
    );
  }
};

export default App;
