import { create } from "zustand";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostState {
    post: Post[];
    loading: boolean;
    error: string | null;
    fetchPost: () => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
    post: [],
    loading: false, 
    error: null,

    fetchPost: async () => {
        set({ loading: true, error: null });

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );
            const data: Post[] = await response.json();
            set({ post: data });
        } catch (err) {
            set({ error: "Failed to fetch posts" });
        } finally {
            set({ loading: false });
        }
    },
}));
