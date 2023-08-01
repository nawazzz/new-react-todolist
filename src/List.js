import React from "react";

class List extends React.Component {
    render() {
        return(
            <div>
                {this.props.allTodo && this.props.allTodo.map(elm => {
                    return(
                        <div>
                            <input type="checkbox" onClick={()=> this.props.completeTodo(elm)}/>
                            <p style={{textDecoration: elm.isCompleted? "line-through": "none"}}
                                onClick={() => {this.props.editTodo(elm)}}
                            >{elm.inputText}</p>
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