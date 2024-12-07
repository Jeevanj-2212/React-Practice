import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/java">Java</Link>
      <Link to="/python">Python</Link>
      <Link to="/html">Html</Link>
    </nav>
  )
}
