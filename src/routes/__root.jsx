import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NavBar  from '../components/NavBar'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="pt-20 md:pt-0 w-full overflow-x-hidden">
        <Outlet />
      </div>
    </React.Fragment>
  )
}
