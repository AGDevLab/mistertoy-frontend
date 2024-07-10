import { useDispatch, useSelector } from 'react-redux'

import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {
  const carsLength = useSelector(
    (storeState) => storeState.carModule.toys.length
  )

  return (
    <footer className='app-footer'>
      <h5>Currently {carsLength} toys in the shop</h5>

      <UserMsg />
    </footer>
  )
}
