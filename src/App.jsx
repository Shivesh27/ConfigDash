import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Basic/Card'
import TextBlock from './components/Basic/TextBlock'

import dashboardConfig from './dashboardConfig.json'

function App() {

  const componentMap = {
    Card: Card,
    TextBlock: TextBlock
  }

  const dashboardRenderer = (components) => {
    return (
      <div className='grid grid-cols-2 gap-4'>
      {
        components.map((componentData) => {
          const Component = componentMap[componentData.type]
          return <Component {...componentData?.payload} key={componentData?.id}/>
        })
      }
      </div>
    )
  }

  return (
    <>
    {dashboardRenderer(dashboardConfig?.components)}
    </>
      
  )
}

export default App
