import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import 'office-ui-fabric-react/dist/css/fabric.min.css';

import AddinMain from './components/AddinMain'
// import { AppContainer } from 'react-hot-loader';

// import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// initializeIcons();

// let isOfficeInitialized = false;

const title = 'Live Coding Huge Office Apps';
const subtitle = 'with Maarten van Stam';

const render = (Component) => {
    ReactDOM.render(
   //     <AppContainer>
        <Fabric className="App">
            <Component title = {title} subtitle={subtitle} logo='assets/logo-filled.png' />
        </Fabric>,
    //    </AppContainer>,
        document.getElementById('container')
    );
};

/* Render application after Office initializes */
// Office.initialize = () => {
//     isOfficeInitialized = true;
//     render(AddinMain);
// };

/* Initial render showing a progress bar */
render(AddinMain);

// if ((module as any).hot) {
//     (module as any).hot.accept('./components/AddinMain', () => {
//         const NextApp = require('./components/AddinMain').default;
//         render(NextApp);
//     });
// }