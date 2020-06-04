import React from 'react'
import { Config } from './containers/Config'
import { SampleHome } from './containers/SampleHome'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SampleHome}/>
        <Route exact path="/config" component={Config}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
