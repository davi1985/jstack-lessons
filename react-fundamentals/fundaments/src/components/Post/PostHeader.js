import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function PostHeader({ post: { id, read, title }, onRemove }) {
  return (
    <>
      <strong>
        {read && <s>{title}</s>}
        {!read && title}
      </strong>

      <Button onClick={() => onRemove(id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
