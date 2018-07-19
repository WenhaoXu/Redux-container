// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers/index'
import {Provider} from "react-redux"
import {addTo,decTo,mulTo} from './actions'
const store = createStore(counter)
const rootEl = document.getElementById('root')



ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    rootEl
)

