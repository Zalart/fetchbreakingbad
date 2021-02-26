import React, { Component } from 'react';

class List extends Component {
    // We'll call it when this.props.characterId were updated

    render() {
        const { list, handleClick } = this.props;
        return (
            <div className="list">
                <ul>
                    {list.map((elem) => (
                        <li
                            key={elem.char_id}
                            onClick={() => {
                                handleClick(elem.char_id);
                                //console.log(elem);
                            }}
                        >
                            {elem.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;