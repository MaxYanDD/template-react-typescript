import { useState } from 'react'

function equalArr(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  if (arr1.length === 0 && arr2.length === 0) {
    return true
  }
  return arr1.every((item, index) => item === arr2[index])
}

export default function useEqualArr() {
  const [arrA, setArrA] = useState<number[]>([1, 2, 3])
  const [arrB, setArrB] = useState<number[]>([1, 2, 3])
  const isEqual = equalArr(arrA, arrB)
  return {
    arrA,
    setArrA,
    arrB,
    setArrB,
    isEqual,
  }
}
