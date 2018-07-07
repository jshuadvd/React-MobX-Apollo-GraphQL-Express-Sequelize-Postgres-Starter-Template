import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, creatNetworkInterface, ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Views from './views';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
});

const App = <Views />;

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
