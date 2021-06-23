import Post from '../components/Post';
const AllPosts = (props) => {
    const loading = () => {
        return <h1>loading...</h1>;
    };
    const loaded = () => {
        return props.posts.map((post) => {
            return <Post post={post} key={post.id} />;
        });
    };
    // return props.posts ? loaded() : loading();
    return loaded();
};
export default AllPosts;
