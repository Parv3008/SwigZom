import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Root from './Root';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Root/> 
  </Provider>
);
