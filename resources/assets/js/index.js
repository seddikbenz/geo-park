import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {init} from '@rematch/core'
import registerServiceWorker from './registerServiceWorker';
import * as models from './models'
import {AppRegistry} from 'react-native-web';
// import App container
import App from './containers/App';
// set token before starting App
import * as api from './api'

api.setAuthorizationToken(localStorage.getItem('token'));
// init store of models
const store = init({
  models,
});
// setting store to render with app and router
const RenderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

AppRegistry.registerComponent('RenderApp', () => RenderApp);
AppRegistry.runApplication('RenderApp', {
  rootTag: document.getElementById('root')
});


// if (module.hot) {
//   module.hot.accept();
// }

registerServiceWorker();
