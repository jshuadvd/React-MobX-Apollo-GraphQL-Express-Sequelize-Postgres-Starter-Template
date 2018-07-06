import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, creatNetworkInterface, ApolloProvider } from 'react-apollo';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Views from './views';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
