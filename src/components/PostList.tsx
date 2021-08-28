import { Link } from 'react-router-dom';

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface PropsInterface {
    posts: Post[]
}

const PostList = (props: PropsInterface) => {
    const { posts } = props
    return (
        <div className="blog-list">
            {posts.map(post => (
                <div className="blog-preview" key={post.id} >
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PostList;