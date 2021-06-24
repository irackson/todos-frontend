import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
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

function App() {
    const url = 'https://todos-rails-backend.herokuapp.com/todos/';
    const [posts, setPosts] = useState([]);

    const nullTodo = {
        subject: '',
        details: '',
    };

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
                    render={(rp) => <SinglePost posts={posts} {...rp} />}
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
                    render={(rp) => <Form posts={posts} {...rp} />}
                />
            </Switch>
        </div>
    );
}

export default App;
