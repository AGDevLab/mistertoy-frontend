import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'

import { HomePage } from './pages/HomePage.jsx'

import { ToyIndex } from './pages/ToyIndex.jsx'
import { store } from './store/store.js'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'

import '../src/assets/style/main.css'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <main className='main-layout'>
            <Routes>
              <Route element={<HomePage />} path='/' />

              <Route element={<ToyIndex />} path='/toy' />
              <Route element={<ToyEdit />} path='/toy/edit' />
              <Route element={<ToyEdit />} path='/toy/edit/:toyId' />
              <Route element={<ToyDetails />} path='/toy/:toyId' />
            </Routes>
          </main>
          <AppFooter />
        </section>
        <UserMsg />
      </Router>
    </Provider>
  )
}
