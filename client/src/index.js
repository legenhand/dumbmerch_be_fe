import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import {UserContextProvider} from "./context/userContext";
import {BrowserRouter} from "react-router-dom";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserContextProvider>
          <QueryClientProvider client={client}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </QueryClientProvider>
      </UserContextProvider>
  </React.StrictMode>
);