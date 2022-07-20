import "./styles.css";

export const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.titleCover} />
      <div id={post.id} className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
