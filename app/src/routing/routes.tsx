import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { ROUTES } from '../constants/routes'

const Home = React.lazy(() => import('../pages/Home'))
const Assembly = React.lazy(() => import('../pages/Assembly'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const Routes: FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Switch>
      <Route
        path={ROUTES.HOME}
        component={Home}
        exact
      />
      <Route
        path={`${ROUTES.ASSEMBLY}/:assemblyId`}
        component={Assembly}
        exact
      />

      <Route
        path={'*'}
        component={NotFound}
      />
    </Switch>
  </React.Suspense>
)

export default Routes
