import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     character=
        // }
    }

    /* componentDidMount() {
        fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
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
    } */

    render() {
        const { character } = this.props;
        return (
            <div className="character">
                <img src={character.img} />
                <h2>{character.name}</h2>
                <span>{character.nickname}</span>
                <span>{character.birthday}</span>
                {/* <ul>
                    {character.occupation.map((el) => (
                        <li
                            key={el}
                        >
                            {el}
                        </li>
                    ))}
                </ul> */}
            </div>
        )
    }
}
export default Character;