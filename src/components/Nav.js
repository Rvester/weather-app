import React from 'react'
import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div className= "nav">
        <Link to = "/">
            <div>Weather</div>
        </Link>
        <Link to = "/astronomy">
            <div>Astronomy</div>
        </Link>

        <Link to = "/timezone">
          <div>Timezone</div>
        </Link>

    </div>
  )
}
