interface Comment {
    postId: number,
    id: number,
    name: string,
    body: string,
    email: string
}

interface PropsInterface {
    comments: Comment[]
}

const CommentList = (props: PropsInterface) => {
    const { comments } = props
    return (
        <div className="blog-details">
            {comments.map(comment => (
                <article key={comment.id} >
                    <h2>{comment.name}</h2>
                    <p>Written by
                        <span style={{
                            color: '#64BA54'
                        }}> {comment.email}</span>
                    </p>
                    <div>{comment.body}</div>
                </article>
            ))}
        </div>
    );
}

export default CommentList;