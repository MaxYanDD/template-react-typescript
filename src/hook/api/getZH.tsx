import axios from 'axios'
import { useState, useEffect } from 'react'

interface IStory {
  ga_prefix: string
  hint: string
  id: number
  image_hue: string
  images: string[]
  image: string
  title: string
  type: number
  url: string
}

export interface IFeed {
  data: string
  stories: IStory[]
  top_stories: IStory[]
}

export function zhLastFeedApi(): Promise<IFeed> {
  return axios
    .get('https://news-at.zhihu.com/api/4/news/latest')
    .then((res) => res.data)
}
