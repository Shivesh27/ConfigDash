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

  const componentMap = {
    Card: Card,
    TextBlock: TextBlock,
    Table :Table,
    Button: Button,
    PieChart:PieChartComponent
  }

  const dashboardRenderer = (components) => {
    return (
      <div className=''>
      {
        components?.map((componentData) => {
          const Component = componentMap[componentData.type]
          return <Component {...componentData?.payload} key={componentData?.id}/>
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
      <div className='flex-1 overflow-y-auto p-4'>
        {dashboardRenderer(dashboardConfig)}
      </div>
      <SaveButton/>
    
    </div>
      
  )
}

export default App
