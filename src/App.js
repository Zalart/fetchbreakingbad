import React, { Component } from 'react';

import List from './components/List';
import Character from './components/Character';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: {},
      currentCharacterId: null,
      prevCharacterId: null,
      isLoaded: false,
      timeOut: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    fetch(`https://www.breakingbadapi.com/api/characters/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            characters: result,
            currentCharacter: result[0],
            currentCharacterId: 1,
            prevCharacterId: 1,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false
          });
        }
      )
  }

  handleClick(id) {
    if (this.state.currentCharacterId !== id) {
      this.setState({
        prevCharacterId: this.state.currentCharacterId,
        currentCharacterId: id,
        timeOut: false,
        isLoaded: false
      })
      /*  else {
        console.log("the Id is the same")
      } */
      // }
    }
  }
  handleLoad() {
    this.setState({
      timeOut: true
    })
  }


  //https://ru.reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate() {
    console.log(this.state.timeOut)
    if (this.state.timeOut && this.state.currentCharacterId !== this.state.prevCharacterId) {

      fetch(`https://www.breakingbadapi.com/api/characters/${this.state.currentCharacterId}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              currentCharacter: result[0],
              currentCharacterId: this.state.currentCharacterId,
              prevCharacterId: this.state.currentCharacterId,
              isLoaded: true,
            });
            console.log('component App.js has been updated');
            console.log(result);
          },
          (error) => {
            this.setState({
              isLoaded: false
            });
          }
        )

    }

  }

  render() {
    return (
      <div className="App" >
        <List
          list={this.state.characters}
          characterId={this.state.currentCharacterId}
          handleClick={this.handleClick}
        />
        {!this.state.timeOut && <Timer handleLoad={this.handleLoad} />}
        {this.state.isLoaded && <Character
          currentCharacter={this.state.currentCharacter}
        />}
      </div>
    );
  }

}
export default App;