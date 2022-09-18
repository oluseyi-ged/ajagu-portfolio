import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./Theme"
import GlobalStyle from "./globalStyles"
import { PropsWithChildren } from "react"
import { ReactNode } from "react"

const ThemeProviderFixed = ThemeProvider as unknown as React.FC<
  PropsWithChildren<{ theme: any }>
>

const GlobalStyleFixed = GlobalStyle as unknown as React.FC<PropsWithChildren>

function AppWrapper({ children }: any) {
  return (
    <ThemeProviderFixed theme={lightTheme}>
      <GlobalStyleFixed />
      {children}
    </ThemeProviderFixed>
  )
}

export default AppWrapper
