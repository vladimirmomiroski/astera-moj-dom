import { create } from "zustand";

type ListingsState = {
  isLoading: boolean;
  setIsLoading: () => void;
};
export const useListingsStore = create<ListingsState>((set) => ({
  isLoading: true,
  setIsLoading: () =>
    set((state) => ({ isLoading: (state.isLoading = !state.isLoading) })),
}));
