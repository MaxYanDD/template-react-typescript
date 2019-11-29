import React, { SFC, ReactNode } from 'react'
import { Route, RouteProps } from 'react-router'
import FadeIn from './FadeIn'

interface IFadeProps {
  com: React.ComponentType<RouteProps>
}

const FadeRoute: SFC<IFadeProps & RouteProps> = ({
  com: Component,
  children,
  ...res
}) => {
  console.log(<Component />, children)
  return (
    <Route
      {...res}
      render={(routeProps) => (
        <FadeIn>
          <Component {...routeProps} />
        </FadeIn>
      )}></Route>
  )
}

export default FadeRoute
