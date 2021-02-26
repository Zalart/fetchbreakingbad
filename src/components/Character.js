import React, { Component } from 'react';
import './Character.css';

class Character extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.currentCharacter !== nextProps.currentCharacter) {
            return true;
        }
        else {
            return false;
        }

    }
    render() {
        const { currentCharacter } = this.props;
        return (

            <div className="character">
                <img alt={currentCharacter.name} title={currentCharacter.name} src={currentCharacter.img} />
                <div className="characterData">
                    <h2>{currentCharacter.name}</h2>
                    <div className="nickname">A.K.A.  <span>{currentCharacter.nickname}</span></div>
                    {currentCharacter.birthday !== "Unknown" ? <div className="birthdate"><span>Date of birth: </span>{currentCharacter.birthday}</div> : null}
                    {currentCharacter.occupation[0] !== "unknown" ? <div className="occupation"><h3>Occupation:</h3>
                        <ul>
                            {currentCharacter.occupation.map((el) => (
                                <li
                                    key={el}
                                >
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </div> : null
                    }
                </div>
            </div>
        )
    }
}
export default Character;