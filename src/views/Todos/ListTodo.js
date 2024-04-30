import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";

import { toast } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making videos'},
            {id: 'todo3', title: 'Fixing bugs'},
        ]
    }
    handleEditTodo = (item) => {
        
    }
    handleAddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!");
    }

    render() {
        let { listTodos } = this.state;
        console.log("listTodos = ", listTodos);
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.handleAddNewTodo}
                />
                <div className="list-todo-content">
                    {
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button
                                        className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >Edit</button>
                                    <button
                                        className="delete"
                                    >Delete</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListToDo