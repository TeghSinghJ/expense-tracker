import React, { useState } from 'react'
import Tracker from './components/Tracker'
import Navbar from './components/Navbar'

const App = () => {
  const [excelData,setExcelData] = useState([])
  return (
    <div>
      <Navbar excelData={excelData} />
      <div className='container-fluid my-3'>
        <Tracker excelData={excelData} setExcelData={setExcelData}/>
      </div>
    </div>
  )
}

export default App
