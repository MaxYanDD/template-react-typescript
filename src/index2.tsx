export interface IResponse<T> {
  message: string
  result: T
  success: boolean
}

const option = {
  a: 1,
}

type Option = typeof option

interface IColor {
  color: 'red' | 'yellow'
}

const color: IColor['color'] = 'red'

async function getResponse(): Promise<IResponse<number[]>> {
  return {
    message: '获取成功',
    result: [1, 2, 3],
    success: true,
  }
}
getResponse().then((res) => {
  console.log(res.result)
})
