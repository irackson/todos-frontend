import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import AllPosts from './pages/AllPosts';
import Form from './pages/Form';
import SinglePost from './pages/SinglePost';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
function App() {
    //* Style Objects

    const H1 = styled.h1`
        text-align: center;
        margin: 10px;
    `;

    const url = 'https://todos-rails-backend.herokuapp.com/todos/';
    const [posts, setPosts] = useState([]);

    return <div className="App">app</div>;
}

export default App;
