"use client"
import { ReactNode } from 'react'
import {DarkModeProvider,AuthProvider} from './'
import DarkModeToggle from '@/components/DarkModeToogle';

const CombinedProvider = ({children}:{children:ReactNode}) => {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <div >
          <DarkModeToggle />
        </div>
        {children}
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default CombinedProvider