import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';


import { Grid } from 'react-redux-grid';
import { gridData, columns, store } from './gridData';

const asyncResponse = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    }) 
}

class App extends React.Component {
    render() {

        const {
            store
        } = this.context;

        const GridProps = {
            columns,
            stateKey: 'someStateKey',
            data: gridData,
            gridType: 'grid',
            stateful: true,
            store,
            plugins: {
                COLUMN_MANAGER: {
                    resizable: true,
                    moveable: true
                }
            }
        };

        return (
            <Grid { ...GridProps } />
        );
    }
}

App.contextTypes = {
    store: React.PropTypes.object
};

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);