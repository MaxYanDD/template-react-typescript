import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from './About'

function index() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about/2">about</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about/:id" component={About}>
          {/* 如果有children，就渲染，不渲染component的 */}
          {/* <div>about2</div> */}
        </Route>
        <Route path="/dashboard">
          <div>dashboard</div>
        </Route>
        <Route path="/">
          <div>home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default index
