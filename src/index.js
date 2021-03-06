import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './index.css';
import Headerbar from "./components/Headerbar.js";
import { directive } from '@babel/types';
// import App from './App';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bianvenue a REact et react-i18next"
        }
      },
      sin: {
        translation: {
          "Welcome to React": "React සඳහා ඔබව සාදරයෙන් පිළිගනිමු ! - React i18next"
        }
      },

    },
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return(
    <div>
      <h2>{t('Welcome to React')}</h2>
    
    </div>
    
  ) 

}

ReactDOM.render(
  <React.StrictMode>
    <Headerbar />
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
