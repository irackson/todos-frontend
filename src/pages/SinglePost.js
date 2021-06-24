import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    border: 3px solid green;
    margin: 30px auto;
    width: 80%;
`;

const SinglePost = ({ posts, match, edit, deleteTodo, history }) => {
    const loading = () => {
        return <h1>loading...</h1>;
    };
    const loaded = () => {
        const post = posts.find((p) => p.id === parseInt(match.params.id));
        return post?.id ? (
            <Div>
                <h1>{post.subject}</h1>
                <h2>{post.details}</h2>
                <button onClick={(e) => edit(post)}>Edit Todo</button>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
                <button
                    onClick={(event) => {
                        deleteTodo(post);
                        history.push('/');
                    }}
                >
                    Delete
                </button>
            </Div>
        ) : null;
    };
    return posts ? loaded() : loading();
};
export default SinglePost;
