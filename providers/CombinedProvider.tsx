"use client"
import { ReactNode } from 'react'
import {DarkModeProvider} from './'
import { SessionProvider } from 'next-auth/react';


const CombinedProvider = ({children}:{children:ReactNode}) => {
  return (
    <SessionProvider>
      <DarkModeProvider
        defaultTheme="system"
        disableTransitionOnChange
        attribute="class"
        enableSystem
      >
        {children}
      </DarkModeProvider>
    </SessionProvider>
  );
}

export default CombinedProvider