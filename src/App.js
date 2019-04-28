import React from 'react';
import gotLogo from './images/got-logo-png-1.png';
import './App.css';

import characters from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gotLogo} className="App-logo" alt="logo" />
          <h3>
            Character of Thrones App
          </h3>
            <CharacterList characters={Object.values(characters)} handleClick={this._setCharactersState} />
        </header>
      </div>
    );
  }
  _setCharactersState = (character) => {
    console.log(`You picked ${character.name}`)
    this.setState({
      character
    })

  }
}


export default App;
      
