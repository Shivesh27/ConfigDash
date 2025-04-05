import { useDashboardStore } from "../../store/dashboardStore"

const SaveButton = () => {

    const config = useDashboardStore((state) => state.config)
    const saveToLocal = () => {
        localStorage.setItem('dashboard_config', JSON.stringify(config))
        alert("dashboard saved!!")
    }

    return(
        <div className="absolute top-2 right-4">
            <button 
            type="button"
            className="bg-green-400 hover:bg-green-500 hover:cursor-pointer px-6 py-2 rounded-lg shadow-sm"
            onClick={() => saveToLocal()}
        >
            💾 Save
        </button>
        </div>
        
    )
}
export default SaveButton