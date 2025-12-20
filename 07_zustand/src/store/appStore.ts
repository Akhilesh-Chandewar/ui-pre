import { create } from "zustand";

type Theme = "dark" | "light";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AppState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;

    theme: Theme;
    toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    user: null,

    login: (user) => set({ user }),
    logout: () => set({ user: null }),

    theme: "dark",
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === "dark" ? "light" : "dark",
        })),
}));
