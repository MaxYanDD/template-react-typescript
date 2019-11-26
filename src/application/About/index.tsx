import React, { SFC } from 'react'
import { connect } from 'react-redux'

const About: SFC = (props) => {
  return (
    <div>
      <span>about</span>
      <div>
        <button>减一</button>
        <button>加一</button>
      </div>
      <div>
        <input type="text" />
        <button>加</button>
      </div>
    </div>
  )
}

// const mapStateToProps = () => {
//   return {
//     color: state.color,
//   }
// }

export default connect(mapStateToProps)(React.memo(About))
