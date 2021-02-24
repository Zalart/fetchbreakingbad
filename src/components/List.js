import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        // this.state={ 
        // }
    }

    render() {
        const { list, handleClick } = this.props;
        return (
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
        )
    }
}

export default List;