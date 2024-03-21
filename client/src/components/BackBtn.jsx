import React from 'react'
import {Link} from "react-router-dom"
function backbtn() {

   return (

<Link to="/main">
            <button type="button" className="main-btn">Back to Main </button>
        </Link>
  )
}

export default backbtn
