import React, { Component } from 'react';
class ToDoItems extends Component {
    state = {}
    render(props) {
        return (

            <div >
                <div className='todo'>
                    <p> <input type='checkbox' name={this.props.name} />  {this.props.name}</p>

                </div>

            </div >
        );
    }
}

export default ToDoItems;