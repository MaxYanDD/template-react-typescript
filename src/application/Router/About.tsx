import React, { SFC } from 'react'
import { useParams, useRouteMatch, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import FadeRoute from './FadeRoute'
import AboutMe from './AboutMe'

const About: SFC = (props) => {
  const match = useRouteMatch()
  console.log(props)
  return (
    <div>
      <span>aaa</span>
      <span>{`${match}`}</span>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={`${match.url}/other`}>about/other</Link>
          </li>
          <li>
            <Link to={`${match.url}/me`}>about/me</Link>
          </li>
        </ul>
        <FadeRoute path={`${match.path}/other`} com={AboutMe}>
          <div>aa</div>
        </FadeRoute>
        <Route path={`${match.path}/me`}>
          <div>about/me</div>
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default About
