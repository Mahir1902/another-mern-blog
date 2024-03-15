import axios from "axios";
import { create } from "zustand";

type PostState = {
  title: string;
  content: string;
  media: string;
  catSlug: string;
};

type PostActions = {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setMedia: (media: string) => void;
  submitPost: () => Promise<void>;

  setCatSlug: (catSlug: string) => void;
};

type PostStore = PostState & PostActions;

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const usePostStore = create<PostStore>((set, get) => ({
  title: "",
  content: "",
  media: "",
  catSlug: "",
  setTitle: (title: string) => set(() => ({ title })),
  setContent: (content: string) => set(() => ({ content })),
  setMedia: (media: string) => set(() => ({ media })),
  setCatSlug: (catSlug: string) => set(() => ({ catSlug })),

  
  submitPost: async () => {
     // Use the get function provided by Zustand
    const { title, content, media, catSlug } = get();

    return axios.post('http://localhost:3000/api/post/createPost', {
      title,
      desc: content,
      img: media,
      slug: slugify(title),
      catSlug
    }, { withCredentials: true })
    .then(res => {
      console.log('Post submitted successfully', res.data);
    })
    .catch(error => {
      console.error('Failed to submit post', error);
      throw error;
    });
  }
}));

export default usePostStore;
