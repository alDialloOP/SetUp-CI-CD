import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => (
   <Component {...pageProps} >  </Component>
)

export default appWithTranslation(MyApp)
