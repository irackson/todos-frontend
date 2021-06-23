import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    border: 3px solid;
    margin: 10px auto;
    width: 80%;
`;

const Post = ({ post }) => {
    return (
        <Div>
            <Link to={`/post/${post.id}`}>
                <h1>{post.subject}</h1>
            </Link>
            <h2>{post.details}</h2>
        </Div>
    );
};
export default Post;
