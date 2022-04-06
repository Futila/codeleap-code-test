export function useUser() {
  const createUser = (username) => {
    localStorage.setItem('username', username);
  };

  const getUser = () => localStorage.getItem('username');

  const removeUser = () => localStorage.removeItem('username');

  return { createUser, getUser, removeUser };
}
