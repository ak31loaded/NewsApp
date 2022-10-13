import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element=
            {<News key="general" category="general" />} />
          <Route exact path="/general" element=
            {<News key="general" category="general" />} />
          <Route exact path="/entertainment" element=
            {<News key="entertainment" category="entertainment" />} />
          <Route exact path="/science" element=
            {<News key="science" category="science" />} />
          <Route exact path="/sports" element=
            {<News key="sports" category="sports" />} />
          <Route exact path="/health" element=
            {<News key="health" category="health" />} />
          <Route exact path="/technology" element=
            {<News key="technology" category="technology" />} />


        </Routes>
      </Router>
    </div>
  )


}
export default App
