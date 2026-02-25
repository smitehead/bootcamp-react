import React, { useEffect } from "react";
import { requestPost } from "../../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
export default function PostListComponent() {
  const dispatch = useDispatch();
  const { posts, loding, error } = useSelector((state) => state.posts);
  useEffect(() => {
    //설정된 서버에 비동기 요청을 전송
    dispatch(requestPost());
  }, []);
  if (loding) return <h2>posts가져오는 중....</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: "8px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
