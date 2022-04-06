import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePosts } from '../../hooks/posts';
import { useModal } from '../../hooks/modal';

import { Container } from './styles';
import { CustomButton } from '../CustomButton';

export default function Modal() {
  const userPost = useSelector((state) => state.modal.modalUserPost);

  const [title, setTitle] = useState(userPost.title);
  const [content, setContent] = useState(userPost.content);

  const { closeModal } = useModal();
  const { updatePost } = usePosts();

  function handleCancel() {
    closeModal();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      ...userPost,
      title,
      content,
    };
    updatePost(post);

    closeModal();
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Edit item</h1>

        <label htmlFor="title">title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="hello world"
          type="text"
          name="title"
          id="title"
          value={title}
        />

        <label htmlFor="content">Content</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="content here"
          name="content"
          id="content"
          value={content}
        />

        <div>
          <CustomButton inverted type="button" onClick={handleCancel}>
            cancel
          </CustomButton>
          <CustomButton disabled={!title || !content} type="submit">
            Save
          </CustomButton>
        </div>
      </form>
    </Container>
  );
}
