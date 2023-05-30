import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '@/Layout/Navigation'
import { Poppins } from 'next/font/google'
import { theme } from '@/models/theme'
import Sidebar from '@/Layout/Sidebar.layout'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return<>
  <style jsx global>
      {`
        :root {
          --font-rubik: ${poppins.style.fontFamily};
        }
      `}
    </style>

        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
  </>
  
  
}
