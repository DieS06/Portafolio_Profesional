import i18next from 'i18next'
import {Translation, initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'es',
        resources: {
            es:{
                translation: {
                    /*Nav Bar*/
                    gallery_trans: 'Galería',
                    contact_trans: 'Contacto',
                }
            },
            en:{
                translation: {
                    gallery_trans: 'Gallery',
                    contact_trans: 'Contact',
                }
            }
        }
    })