import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './store';
import * as serviceWorker from './serviceWorker';

// import { fetchPosts } from './actions/postActions';
// store.dispatch(fetchPosts());
// <Provider store={ store }>
// </Provider>,

ReactDOM.render(

    <App />,

  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
