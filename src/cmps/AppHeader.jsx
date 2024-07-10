import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { UserMsg } from './UserMsg.jsx'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

import { TOGGLE_CART_IS_SHOWN } from '../store/reducers/toy.reducer.js'

export function AppHeader() {
  return (
    <header className='app-header full main-layout'>
      <section className='header-container'>
        <h1>React Toy App</h1>
        <nav className='app-nav'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/toy'>Toys</NavLink>
          <a onClick={onToggleCart} href='#'>
            🛒 Cart
          </a>
        </nav>
      </section>

      <UserMsg />
    </header>
  )
}
