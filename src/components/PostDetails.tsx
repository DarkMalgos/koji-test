import { useParams } from "react-router-dom";
import { useGetPostByIdQuery, useGetAllCommentsQuery } from '../api/JSONPlaceholder'
import CommentList from "./CommentList";

interface PostParams {
    id: string
}

const PostDetails = () => {
    const { id } = useParams<PostParams>();
    const { data: post, error: postError, isLoading: postLoading } = useGetPostByIdQuery(Number(id));
    const { data: comments, error: commentsError, isLoading: commentsLoading } = useGetAllCommentsQuery(Number(id))
    
    let error
    let isLoading
    if (!postError || !commentsError)
        error = false
    else
        error = true

    if (!postLoading || !commentsLoading)
        isLoading = false
    else
        isLoading = true
    

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>an error is occurated</div>}
            {post && (
                <article>
                    <h2>{post.title}</h2>
                   <div>{post.body}</div>
                </article>
            )}
            {comments && (
                <div>
                    <h1>Comments</h1>
                    <CommentList comments={comments} />
                </div>
            )}
        </div>
    );
}

export default PostDetails;