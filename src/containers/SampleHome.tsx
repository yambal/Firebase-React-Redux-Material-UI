import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface iSampleHome extends RouteComponentProps<{}>{

}

const _SampleHome:React.FC<iSampleHome> = props => {
  const clickHandle = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    props.history.push('/config')
  },
  [])

  return (
    <div>
      <a href="/config" onClick={clickHandle}>Config</a>
    </div>
  )
}

export const SampleHome = withRouter(_SampleHome)