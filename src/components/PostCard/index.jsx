import props from 'prop-types';
import './styles.css';

export const PostCard = ({ post }) => {
  const { cover, id, title, body } = post;

  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div id={id} className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: {
    cover: props.string.isRequired,
    title: props.string.isRequired,
    id: props.number.isRequired,
    body: props.string.isRequired,
  },
};
