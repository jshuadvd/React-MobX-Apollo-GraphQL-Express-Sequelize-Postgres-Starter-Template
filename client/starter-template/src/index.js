import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, creatNetworkInterface, ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';

import Views from './views';

const App = <Views />;

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
