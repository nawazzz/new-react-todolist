import React from "react";
import './List.scss';


class List extends React.Component {
    render() {
        return(
            <div>
                {this.props.allTodo && this.props.allTodo.map(elm => {
                    return(
                        <div className="listItem">
                            <div className="inputContainer">
                            <input type="checkbox" onClick={()=> this.props.completeTodo(elm)}/>
                            <p style={{textDecoration: elm.isCompleted? "line-through": "none"}}
                                onClick={() => {this.props.editTodo(elm)}}
                            >{elm.inputText}</p>
                            </div>
                            <p style={{cursor: 'pointer'}}
                                onClick={() => this.props.deleteTodo(elm)}
                            >x</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List;