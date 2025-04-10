import { useDashboardStore } from "../../store/dashboardStore"
import ObjectInputField from "../Controls/ObjectInputField"

const components = ["Card", "TextBlock", "Button", "Table", "PieChart"]


const componentMap = [
    {
        type: 'Card',
        defaultProps: {
            title: "Title",
            value: "50,000"
        }
    },
    {
        type: 'TextBlock',
        defaultProps: {
            text: "Hello this is being rendered from config"
        }
    },
    {
        type: 'Button',
        defaultProps: {
            label: "Click Me!!",
            action: "alert",
            message: "Button Clicked!!"
        }
    },
    {
        type: 'Table',
        defaultProps: {
            headers: ["Header1", "Header2", "Header3"],
            data: [
                ["Hello", "somethinh", "dskhj"],
                ["Hello", "somethinh", "dskhj"],
                ["Hello", "somethinh", "dskhj"]
            ]
        }
    },
    {
        type: "PieChart",
        defaultProps: {
            title: "PieChart",
            data: [
                { "name": "India", "value": 400 },
                { "name": "USA", "value": 300 },
                { "name": "UK", "value": 300 },
                { "name": "Germany", "value": 200 }
            ]
        }
    }
]




const SideBar = () => {

    const addComponent = useDashboardStore((state) => state.addComponent)

    const resetDashboard = useDashboardStore((state) => state.resetDashboard)

    const activeIndex = useDashboardStore((state) => state.activeIndex)
    const config = useDashboardStore((state) => state.config)
    const updateComponent = useDashboardStore((state) => state.updateComponent)

    const activeComponent = config[activeIndex]
    
    const onAddClick = ({type, defaultProps}) => {
        addComponent({id: Date.now(), type, payload: defaultProps})
    }

    return(
        <div className="bg-white w-64 h-screen shadow-md border-r border-gray-300">

         <h2 className="text-xl font-semibold mb-4 p-2">Component Library</h2>
         {activeComponent ?
         (
            <div className="flex flex-col text-right">
                {Object.entries(activeComponent.payload).map(([key, value]) => (

                    

                    <div key={key} className="p-1 space-x-2">
                    <label className="font-bold">{key}:</label>
                    {typeof value === "object" ? 
                    
                    (
                    <>
                    <ObjectInputField 
                        currValue={value}
                        update={(updatedValue) => updateComponent(activeIndex, {[key]: updatedValue})}
                    />
                    </>
                    )
                    
                    : 
                    <input
                        value={value}
                        className="border-1 border-gray-400 rounded p-1"
                        onChange={(e) => {updateComponent(activeIndex, {[key]: e.target.value})}}
                    />}
                    
                    </div>

                ))}
            </div>
         )
         :
         (<ul className="space-y-2 p-4 h-11/12 flex flex-col">
            {
                componentMap.map((component) => (
                    <li key={component.type}>
                        <button 
                            type="button" 
                            className="w-full font-medium text-left px-4 py-2 bg-amber-200 hover:bg-amber-300 rounded-xl"
                            onClick={() => onAddClick(component)}
                        >
                            + {component?.type}
                        </button>
                    </li>
                ))
            }
            <li className="mt-auto">
                <button 
                    type="button"
                    className="w-full font-bold text-gray-800 text-left px-4 py-2 bg-red-400 hover:bg-red-600 rounded-xl"
                    onClick={() => resetDashboard()}
                    >
                    🗑️ Reset Dashboard
                </button>
            </li>
         </ul>)
         }
         
        </div>
    )
}

export default SideBar