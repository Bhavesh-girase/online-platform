const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import './index.css'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'


if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
     <AppContextProvider>
        <App/>
     </AppContextProvider>
   </ClerkProvider>
 </BrowserRouter>
)
