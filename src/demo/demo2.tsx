import React, { SFC, useRef, useState, useEffect } from 'react'
import anim from 'animejs'
import './demo3.css'
interface IProps {}

const Demo2: SFC<IProps> = ({}) => {
  const [anime1, setAnime1] = useState(false)
  const [anime2, setAnime2] = useState(false)
  const element = useRef<any>()

  function animate1() {
    if (element) {
      anim({
        targets: element.current,
        translateX: 400,
        backgroundColor: '#FF8F42',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: () => {
          setAnime1(false)
        },
      })
    }
  }

  function animate2() {
    if (element) {
      anim({
        targets: element.current,
        translateX: 0,
        backgroundColor: '#FFF',
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        complete: () => {
          setAnime2(false)
        },
      })
    }
  }

  useEffect(() => {
    anime1 && animate1()
  }, [anime1])

  useEffect(() => {
    anime2 && animate2()
  }, [anime2])

  function clickHandler() {
    setAnime1(true)
    setTimeout(animate2.bind(null, true), 500)
  }

  return (
    <div className="demo3">
      <div onClick={clickHandler} ref={element} className="box"></div>
    </div>
  )
}

export default Demo2
