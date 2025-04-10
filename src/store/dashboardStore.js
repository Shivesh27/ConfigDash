import { create } from "zustand";


const getInitialConfig = () => {
    const saved = localStorage.getItem("dashboard_config")
    return saved ? JSON.parse(saved): []
}

export const useDashboardStore = create((set) => ({
    config: getInitialConfig(),
    activeIndex: null,
    setActiveIndex: (index) => set({activeIndex: index}),
    addComponent: (component) => 
        set((state) => ({
            config: [...state.config, component]
        })),
    resetDashboard: () => {
        set({config: [],activeIndex: null})
    },
    updateComponent: (activeIndex, updatedProp) => {

        set((state) => {
            const newConfig = [...state.config]
            newConfig[activeIndex].payload = {...newConfig[activeIndex].payload, ...updatedProp}
            return {config: newConfig}
        })
    }
}))