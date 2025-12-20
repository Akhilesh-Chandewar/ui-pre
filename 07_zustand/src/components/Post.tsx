import { useEffect } from "react"
import { usePostStore } from "../store/postStore"


function Post() {
    const { post, loading, error, fetchPost } = usePostStore((state) => state);

    useEffect(() => {
        fetchPost();
    }, [fetchPost])

    return (
        <div>
            <h2>Post</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {post.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Post