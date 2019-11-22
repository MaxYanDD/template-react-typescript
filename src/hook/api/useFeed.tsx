import { zhLastFeedApi, IFeed } from './getZH'
import { useState, useEffect } from 'react'

export default function useFeed() {
  const [feed, setFeed] = useState<IFeed>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      return
    }
    zhLastFeedApi().then((res) => {
      setLoading(false)
      setFeed(res)
    })
  }, [loading])

  return { feed, setLoading, loading }
}
