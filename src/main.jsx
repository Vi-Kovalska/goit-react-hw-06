import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import "modern-normalize";
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';
import './components/App.css'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PersistGate loading={null} persistor={persistor}>
    	  <Provider store={store}>
      <App />
      <Toaster/>
      </Provider>
      </PersistGate>
  </StrictMode>,
)
