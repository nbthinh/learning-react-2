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
        ],
        editTodo: {}
    }
    handleEditTodo = (todo) => {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        if (!isEmptyObj && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let currIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
            listTodosCopy[currIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo success");
        }
        else {
            this.setState({
                editTodo: todo
            })
        }
    }
    handleAddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo) => {
        this.setState({
            listTodos: this.state.listTodos.filter((item) => item !== todo)
        })
        toast.success('Delete success!');
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        console.log("editTodoCopy = ", editTodoCopy);
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>Mặc cái quần</p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.handleAddNewTodo}
                    />
                    <div className="list-todo-content">
                        {
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {
                                            isEmptyObj === true ? 
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {
                                                    item.id === editTodo.id ?
                                                    <span>{index + 1} - <input
                                                        type="text" value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    /></span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <button
                                            className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {!isEmptyObj && item.id === editTodo.id ? "Save" : "Edit"} 
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </>

        );
    }
}

export default ListToDo