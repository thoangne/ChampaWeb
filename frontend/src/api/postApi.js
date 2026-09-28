import axiosClient from './axiosClient';

export const postApi = {
  getAll: () => axiosClient.get('/posts'),
  create: (data) => axiosClient.post('/posts', data),
};