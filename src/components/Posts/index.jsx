import props from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

/*defaultProps está sendo um valor ja setado no destructure de posts*/
Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: props.array,
};
