import axios from 'axios';

const URL = '/api/users';

export const createUser = (createUserData: { email: string; password: string }) =>
  axios.post(URL, { ...createUserData });

export const getUsers = () => axios.get(URL);
