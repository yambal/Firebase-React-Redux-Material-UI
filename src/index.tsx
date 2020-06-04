import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeWrapper } from './theming/ThemeWrapper'

ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper mode="light" lang="ja">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeWrapper>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
