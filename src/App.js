import React, { Component } from 'react';

import List from './components/List';
import Character from './components/Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: {},
      currentCharacterId: 0,
      error: true,
      isLoaded: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    // event.preventDefault();
    // this.setState({
    //   ...this.state,
    //   currentCharacterId: id
    // })
    this.setState(prev => ({

      currentCharacterId: id
    }))
    // console.log(id);
    console.log(this.state.currentCharacterId);
  }

  componentDidMount() {
    fetch(`https://www.breakingbadapi.com/api/characters/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            characters: result,
            currentCharacter: result[0],
            isLoaded: true

          });
          console.log(result);
        },
        (error) => {
          this.setState({
            error: true
          });
        }
      )
  }
  render() {
    return (
      <div className="App" >
        <List
          list={this.state.characters}
          handleClick={this.handleClick}
        />
        {this.state.isLoaded && <Character
          character={this.state.currentCharacter}
        //   currentCharacterId={this.state.currentCharacterId}
        />}
      </div>
    );
  }
}
export default App;