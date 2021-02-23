import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import './assets/css/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App configUrl={'./env.json'} contentUrl={'./content.json'} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
