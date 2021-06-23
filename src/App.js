import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import AllPosts from './pages/AllPosts';
import Form from './pages/Form';
import SinglePost from './pages/SinglePost';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    margin: 10px;
`;
function App() {
    const url = 'https://todos-rails-backend.herokuapp.com/todos/';
    const [posts, setPosts] = useState([]);

    const getTodos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="app">
            <H1>My Todo List</H1>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(rp) => <AllPosts posts={posts} {...rp} />}
                />
                <Route
                    path="/post/:id"
                    render={(rp) => <SinglePost {...rp} />}
                />
                <Route path="/new" render={(rp) => <Form {...rp} />} />
                <Route path="/edit" render={(rp) => <Form {...rp} />} />
            </Switch>
        </div>
    );
}

export default App;
