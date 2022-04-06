import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDateInWords } from '../../utils/formatDate';

import { usePosts } from '../../hooks/posts';
import { useUser } from '../../hooks/user';
import { useModal } from '../../hooks/modal';

import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';

import { Container, Form, PostList, PostItem, Content } from './styles';

import { CustomButton } from '../../components/CustomButton';
import Modal from '../../components/Modal';

export default function Main() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { openModal } = useModal();

  const posts = useSelector((state) => state.post.posts);
  const isModalOpen = useSelector((state) => state.modal.showModal);
  const { getPosts, deletePost, createPost } = usePosts();
  const { getUser, removeUser } = useUser();

  const navigate = useNavigate();

  const fetchPosts = async () => {
    await getPosts();
  };

  useEffect(() => {
    fetchPosts();
  });

  function handleLogout() {
    removeUser();
    navigate('/');
  }
  function handleDelete(post) {
    const result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      deletePost(post);
    }
  }

  function handleEdit(post) {
    openModal(post);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createPost({ title, content });
    setTitle('');
    setContent('');
  }
  return (
    <Container>
      <header>
        CodeLeap Network{' '}
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <Form onSubmit={handleSubmit}>
        <h1>What&apos;s on you mind?</h1>

        <label htmlFor="title">Title</label>
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

        <CustomButton type="submit" disabled={!title || !content}>
          Create
        </CustomButton>
      </Form>

      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <header>
              <strong>{post.title}</strong>

              {post.username === getUser() && (
                <div>
                  <button onClick={() => handleDelete(post)} type="button">
                    <DeleteIcon />
                  </button>
                  <button onClick={() => handleEdit(post)} type="button">
                    <EditIcon />
                  </button>
                </div>
              )}
            </header>

            <Content>
              <div>
                <strong>@{post.username}</strong>

                <span>{formatDateInWords(post.created_datetime)} ago</span>
              </div>

              <p>{post.content}</p>
            </Content>
          </PostItem>
        ))}
      </PostList>
      {isModalOpen && <Modal />}
    </Container>
  );
}
