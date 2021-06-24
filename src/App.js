import './App.css';
import AllPosts from './pages/AllPosts';
import Form from './pages/Form';
import SinglePost from './pages/SinglePost';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    margin: 10px;
`;

const Button = styled.button`
    background-color: navy;
    display: block;
    margin: auto;
`;

function App(props) {
    const url = 'https://todos-rails-backend.herokuapp.com/todos/';
    const nullTodo = {
        subject: '',
        details: '',
    };
    const [posts, setPosts] = useState([]);
    const [targetTodo, setTargetTodo] = useState(nullTodo);

    const getTodos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
    };

    const addTodos = async (newTodo) => {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });
        getTodos();
    };

    const getTargetTodo = (todo) => {
        setTargetTodo(todo);
        props.history.push('/edit');
    };

    const updateTodo = async (todo) => {
        await fetch(url + todo.id, {
            method: 'put',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        getTodos();
    };

    const deleteTodo = async (todo) => {
        const response = await fetch(url + todo.id + '/', {
            method: 'delete',
        });
        getTodos();
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="app">
            <H1>My Todo List</H1>
            <Link to="/new">
                <Button>Create New Todo</Button>
            </Link>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(rp) => <AllPosts posts={posts} {...rp} />}
                />
                <Route
                    path="/post/:id"
                    render={(rp) => (
                        <SinglePost
                            edit={getTargetTodo}
                            posts={posts}
                            deleteTodo={deleteTodo}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/new"
                    render={(rp) => (
                        <Form
                            {...rp}
                            initialTodo={nullTodo}
                            handleSubmit={addTodos}
                            buttonLabel="create todo"
                        />
                    )}
                />
                <Route
                    path="/edit"
                    render={(rp) => (
                        <Form
                            posts={posts}
                            {...rp}
                            initialTodo={targetTodo}
                            handleSubmit={updateTodo}
                            buttonLabel="update todo"
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
