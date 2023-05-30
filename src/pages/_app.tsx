import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '@/Layout/Navigation'
import { Poppins } from 'next/font/google'
import { theme } from '@/models/theme'
import Sidebar from '@/Layout/Sidebar.layout'
import localFont from 'next/font/local';

'../assets/fonts/Graphik-Medium.woff2'

const myFont = localFont({ src: [
  {
    path: '../assets/fonts/Graphik-Regular.woff2',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../assets/fonts/Graphik-Medium.woff2',
    weight: '400',
    style: 'italic',
  },
  {
    path: '../assets/fonts/Graphik-Semibold.woff2',
    weight: '700',
    style: 'normal',
  }
] });


export default function App({ Component, pageProps }: AppProps) {
  return<>
  <style jsx global>
      {`
        :root {
          --font-rubik: ${myFont.style.fontFamily};
        }
      `}
    </style>

        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
  </>
  
  
}
