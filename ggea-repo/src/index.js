import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

// Initializer for Material-UI
injectTapEventPlugin();

const Root = () => {
  return (
    <App/>
  );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWorker();
