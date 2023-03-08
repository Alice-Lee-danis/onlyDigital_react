import './styles.scss'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import { Store } from './state/index';

const root = createRoot(document.getElementById('root'))
root.render(
        <Provider store={Store}>
            <App/>    
        </Provider>
)
