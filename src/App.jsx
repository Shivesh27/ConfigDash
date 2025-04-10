import './App.css'
import Card from './components/Basic/Card'
import TextBlock from './components/Basic/TextBlock'

import Table from './components/Basic/Table'
import Button from './components/Basic/Button'
import PieChartComponent from './components/Charts/PieChartComponent'
import SideBar from './components/SideBar/SideBar'
import { useDashboardStore } from './store/dashboardStore'
import SaveButton from './components/Controls/SaveButton'

function App() {

  const dashboardConfig = useDashboardStore((state) => state.config)
  const setActiveIndex = useDashboardStore((state) => state.setActiveIndex)
  const activeIndex = useDashboardStore((state) => state.activeIndex)

  const componentMap = {
    Card: Card,
    TextBlock: TextBlock,
    Table :Table,
    Button: Button,
    PieChart:PieChartComponent
  }

  const dashboardRenderer = (components) => {



    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {
        components?.map((componentData, index) => {
          const Component = componentMap[componentData.type]
          return <div key={index} onClick={() => setActiveIndex(index)} className={`${activeIndex === index ? 'border-blue-400 border': ''}`}>
            <Component {...componentData?.payload} key={componentData?.id}/>
            </div>
        })
      }
      </div>
    )
  }

  return (
    <div className='flex h-screen bg-gray-100'>
      <div>
        <SideBar/>
      </div>
      <div className='flex-1 overflow-y-auto p-4 pt-20 relative'>
        {dashboardRenderer(dashboardConfig)}
        {activeIndex !== null && 
        <button 
          className='absolute top-2 left-4 bg-blue-200 hover:bg-blue-300 hover: cursor-pointer px-4 py-2 rounded-lg shadow-sm'
          onClick={() => setActiveIndex(null)}
        >
          Exit Editing
        </button>}
      </div>
      <SaveButton/>
     
    
    </div>
      
  )
}

export default App
