import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function AppHeader() {
  return (
    <header className='app-header full main-layout'>
      <section className='header-container'>
        <h1>React Toy App</h1>
        <nav className='app-nav'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/toy'>Toys</NavLink>
        </nav>
      </section>
    </header>
  )
}
