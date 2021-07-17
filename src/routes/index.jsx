import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import ProjectsRoute from './Projects'
import AccountRoute from './Account'
import NotFoundRoute from './NotFound'
import WalletRoute from './Wallet'
import ReferralIncomeRoute from './ReferralIncome'
import AdminRoute from './Admin'
import { LOGIN_PATH } from 'constants/paths'

export default function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Redirect to={LOGIN_PATH} />} />
        {
          // Build Route components from routeSettings
          [
            AccountRoute,
            ProjectsRoute,
            SignupRoute,
            LoginRoute,
            WalletRoute,
            ReferralIncomeRoute,
            AdminRoute,
          ].map((settings) => (
            <Route key={`Route-${settings.path}`} {...settings} />
          ))
        }
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
