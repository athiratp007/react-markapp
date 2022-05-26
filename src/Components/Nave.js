import React from 'react'
import { Link } from 'react-router-dom'

const Nave = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">MZC</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
    
        <Link  class="nav-link" to="/">Addstud</Link>
        <Link  class="nav-link" to="/search">Searchstud</Link>
    
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nave