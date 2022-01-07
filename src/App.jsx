import React from 'react';

import { Provider } from 'react-redux';
import store from './store'

import IndexPage from './pages'

function App() {
    return (
        <div>
            <Provider store={store}>
                <IndexPage/>
            </Provider>
        </div>
    );
}

export default App;
