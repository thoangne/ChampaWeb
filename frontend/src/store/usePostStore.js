import { create } from 'zustand';
import { postApi } from '../api/postApi';

export const usePostStore = create((set) => ({
  posts: [],
  isLoading: false,
  error: null,

  // Lấy toàn bộ bài viết từ backend
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await postApi.getAll();
      set({ posts: res.data || [], isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  // Tạo thêm bài viết mới
  addPost: async (newPostData) => {
    set({ isLoading: true, error: null });
    try {
      const res = await postApi.create(newPostData);
      set((state) => ({
        posts: [res.data, ...state.posts],
        isLoading: false,
      }));
      return true;
    } catch (err) {
      set({ error: err.message, isLoading: false });
      return false;
    }
  },
}));