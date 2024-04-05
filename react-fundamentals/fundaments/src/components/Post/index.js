import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import { Container, Subtitle, Rate } from './styles';

export default function Post({ post, onRemove }) {
  return (
    <Container removed={post.removed}>
      <PostHeader
        onRemove={onRemove}
        post={{
          id: post.id,
          title: post.title,
          read: post.read,
        }}
      />

      <Subtitle>{post.subtitle}</Subtitle>

      <Rate>Media: {Math.ceil(post.likes / 2)}</Rate>
    </Container>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
