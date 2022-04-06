import { useDispatch } from 'react-redux';
import { init, add, drop, edit } from '../redux/features/postSlice';
import { api } from '../actions/api';
import { useUser } from './user';

export function usePosts() {
  const dispatch = useDispatch();
  const { getUser } = useUser();

  const createPost = async (post) => {
    const username = getUser();
    const { data } = await api.post('', {
      username,
      ...post,
    });
    dispatch(add(data));
  };

  const updatePost = async (post) => {
    await api.patch(`${post.id}/`, {
      title: post.title,
      content: post.content,
    });
    dispatch(edit(post));
  };

  const deletePost = async (post) => {
    const username = getUser();
    if (username !== post.username) {
      console.log('Post não pertence a nós');
      return;
    }
    await api.delete(`${post.id}/`);
    dispatch(drop(post));
  };

  const getPosts = async () => {
    const { data } = await api.get('');
    dispatch(init(data.results));
  };

  return { createPost, getPosts, updatePost, deletePost };
}
