import React, { Component } from 'react'
import { ctx } from './Provider'
import { connect } from './react-redux'
import { IState } from './Index'

const mapStateToProps = (state: IState): IState => {
  return { themeColor: state.themeColor }
}

class Header extends Component {
  render() {
    console.log(this.props)
    return <h1 style={{ color: this.props.themeColor }}>asdasd</h1>
  }
}

export default connect({ mapStateToProps })(Header)
