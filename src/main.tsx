import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(i18n.t('main.root_element_not_found'));
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
);
