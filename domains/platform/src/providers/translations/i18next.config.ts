import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import ReactPostprocessor from 'i18next-react-postprocessor'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(new ReactPostprocessor())
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en'],
        preload: ['en'],
        lowerCaseLng: true,
        debug: true,
        saveMissing: true,
        returnEmptyString: true,
        partialBundledLanguages: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
        },
        postProcess: ['reactPostprocessor'],
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
            console.warn(lng, ns, key, fallbackValue)
        },
        backend: {
            // Replace this with your actual endpoint URL
            // loadPath: 'http://localhost:9000/translations',
            // Any additional options like headers or credentials
            // You can also add custom headers if authentication is needed
            customHeaders: {
                Authorization: 'Bearer your-token-here',
            },
            parse: (data: string) => {
                // Parse the JSON string
                const parsedData = JSON.parse(data)

                // Return the 'data' object if 'success' is true
                if (parsedData.success && parsedData.data) {
                    return parsedData.data
                }

                // Fallback in case the structure is unexpected
                return {}
            },
        },
    })

export default i18n
