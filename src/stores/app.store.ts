import { create } from 'zustand';
import type { IApp } from '../intrfaces/app.interface';
import appData from '../assets/data/app.data';
import type { CurrentPage } from '../types/current-page.type';

type AppState = {
    app: IApp;
    setCurrentPage: (page: CurrentPage) => void;
}

const useAppStore = create<AppState>((set) => ({
    app: appData,
    setCurrentPage: (page: CurrentPage) => set((state) => ({
        ...state,
        app: {
            ...state.app,
            currentPage: page,
        }
    })),
}));

export const useSetCurrentPage = () => useAppStore((state) => state.setCurrentPage);
export const useApp = () => useAppStore((state) => state.app);


export default useAppStore;