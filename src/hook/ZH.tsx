import React from 'react'
import useFeed from './api/useFeed'

const ZH = () => {
  const { feed, setLoading, loading } = useFeed()

  if (!feed) {
    return <div>loading</div>
  }

  const { stories, top_stories } = feed
  return (
    <div className="feed_container">
      <div>
        {top_stories.map((item, i) => (
          <a className="top_feed_item" key={i} href={item.url}>
            <img src={item.image} alt="" />
            <div className="title">{item.title}</div>
          </a>
        ))}
      </div>

      <div className="inner">
        {stories.map((item, i) => (
          <a className="feed_item" href={item.url} key={i}>
            <img src={item.images![0]} alt="" />
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="tip">{item.hint}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ZH
