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
import Demo1 from './demo/demo1'
import Demo2 from './demo/demo2'
interface Iprops {}

interface Istate {
  count: number
  value: string
}

class App extends React.Component<Iprops, Istate> {
  public state = {
    count: 1,
    value: '',
  }

  public componentDidMount() {
    console.log(this.inputRef)
    this.setState({ count: 2 })
  }

  private click = (): void => {}

  // 选择DOM
  private inputRef = React.createRef<HTMLInputElement>()

  private onChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ value: e.target.value })
  }

  public render() {
    return (
      <div ref={this.inputRef}>
        Hello world
        <Button />
        <Demo1 value={this.state.value} onChange={this.onChange} />
        <Demo2 />
      </div>
    )
  }
}

export default App
