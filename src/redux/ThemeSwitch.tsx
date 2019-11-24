import React from 'react'
import { store } from './Provider'
import { connect } from './react-redux'
function ThemeSwitch({ changeColor }) {
  return (
    <div>
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('Blue')}>Blue</button>
    </div>
  )
}
const mapDispatchToprops = (dispatch) => {
  return {
    changeColor: (color: string) =>
      dispatch({ type: 'CHANGE_COLOR', themeColor: color }),
  }
}
export default connect({ mapDispatchToprops })(ThemeSwitch)
