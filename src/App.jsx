import { useState } from 'react'
import './App.css'
import Scheduler from './Scheduler'
import Panel from './Panel'

function App() {
  const [schedule, setSchedule] = useState(null)

  return (
    <>
    {/* students panel */}
    <Panel
      title="Students"
      setScheduler={setSchedule}
    >
      
    </Panel>

    {/* doctors panel */}
    <Panel>
    
    </Panel>
    
    {/* scheduler */}
    <Scheduler schedule={schedule}>

    </Scheduler>

    {/* divisions panel */}
    <Panel>
    
    </Panel>
    </>
  )
}

export default App
