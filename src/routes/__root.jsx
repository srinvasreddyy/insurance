import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import { AuthModalProvider } from '../context/AuthModalContext'
import AuthenticationModal from '../components/AuthenticationModal'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <AuthModalProvider>
      <React.Fragment>
        <NavBar/>
        <AuthenticationModal />
        <div className="pt-20 md:pt-0 w-full overflow-x-hidden">
          <Outlet />
        </div>
      </React.Fragment>
    </AuthModalProvider>
  )
}
