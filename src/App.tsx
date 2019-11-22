// import React from "react"
// import ReactDOM from "react-dom"
// import { ConfigProvider, DatePicker, message } from "antd"
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from "antd/es/locale/zh_CN"
// import moment from "moment"
// import "moment/locale/zh-cn"

// moment.locale("zh-cn")

// class App extends React.Component {
//   state = {
//     date: null
//   };

//   handleChange = date => {
//     message.info(
//       `您选择的日期是: ${date ? date.format("YYYY-MM-DD") : "未选择"}`
//     )
//     this.setState({ date })
//   };
//   render() {
//     const { date } = this.state
//     return (
//       <ConfigProvider locale={zhCN}>
//         <div style={{ width: 400, margin: "100px auto" }}>
//           <DatePicker onChange={this.handleChange} />
//           <div style={{ marginTop: 20 }}>
//             当前日期：{date ? date.format("YYYY-MM-DD") : "未选择"}
//           </div>
//         </div>
//       </ConfigProvider>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"))

import * as React from 'react'
import Button from './Button'
import CustomHook from './hook/CustomHook'
import ZH from './hook/ZH'
import UseReducer from './hook/UseReducer'
import UseReducer2 from './hook/UseReducer2'
interface Iprops {}

interface Istate {
  count: number
  show: boolean
}

class App extends React.Component<Iprops, Istate> {
  public state = {
    count: 1,
    show: false,
  }

  public componentDidMount() {
    console.log(this.inputRef)
    this.setState({ count: 2 })
  }

  private click = (): void => {
    this.setState({ show: true })
  }

  // 选择DOM
  private inputRef = React.createRef<HTMLInputElement>()
  public render() {
    console.log('apprender')

    return (
      <div ref={this.inputRef}>
        Hello world
        {<Button show={this.state.show}>点我</Button>}
        <CustomHook />
        <ZH />
        <UseReducer />
        <UseReducer2 />
      </div>
    )
  }
}

export default App
