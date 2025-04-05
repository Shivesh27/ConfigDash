import { create } from "zustand";


const getInitialConfig = () => {
    const saved = localStorage.getItem("dashboard_config")
    return saved ? JSON.parse(saved): []
}

export const useDashboardStore = create((set) => ({
    config: getInitialConfig(),
    addComponent: (component) => 
        set((state) => ({
            config: [...state.config, component]
        })),
    resetDashboard: () => {
        set({config: []})
    }
}))