import React from 'react'
import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div className= "navMenu">
        <Link to = "/">
            <div>Weather</div>
        </Link><br/>
        
        <Link to = "/astronomy">
            <div>Astronomy</div>
        </Link><br/>
        
        <Link to = "/timezone">
          <div>Timezone</div>
        </Link>

    </div>
  )
}
