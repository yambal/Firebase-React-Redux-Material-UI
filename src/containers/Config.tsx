import React from 'react'
import iRootState from '../redux/rootState'
import { useSelector } from 'react-redux'

const testString = (state: iRootState): string | undefined => state.config.testString

export const Config:React.FC = () => {
  const stateTestString = useSelector(testString)

  return (
    <div>
      {stateTestString}
    </div>
  )
}