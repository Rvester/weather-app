import React from 'react'
import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div className= "navMenu">
        <Link to = "/" style={{textDecoration: 'none'}}>
            <div style={{paddingLeft: 13}}>Weather</div>
        </Link>
        
        <Link to = "/astronomy" style={{textDecoration: 'none'}}>
            <div style={{paddingLeft: 13}}>Astronomy</div>
        </Link>
        
        <Link to = "/timezone" style={{textDecoration: 'none'}}>
          <div style={{paddingLeft: 13}}>Timezone</div>
        </Link>

    </div>
  )
}
