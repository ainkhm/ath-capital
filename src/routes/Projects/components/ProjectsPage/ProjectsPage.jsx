import { USERS_PATH } from 'constants/paths'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import ProjectRoute from 'routes/Projects/routes/Project'
import { renderChildren } from 'utils/router'
import ProjectsList from '../ProjectsList'

function ProjectsPage() {
  const match = useRouteMatch()
  const profile = useSelector(({ firebase: { profile } }) => profile)

  return profile.role === "admin"
    ? <Redirect to={USERS_PATH} />
    : (
      <Switch>
        {/* Child routes */}
        {renderChildren([ProjectRoute])}
        {/* Main Route */}
        <Route exact path={match.path} render={() => <ProjectsList />} />
      </Switch>
    )
}

export default ProjectsPage
