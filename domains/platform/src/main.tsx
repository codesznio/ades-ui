import ReactDOM from 'react-dom/client'

import { Providers } from './providers'

// Render the app
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(<Providers />)
}
