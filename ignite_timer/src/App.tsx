import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="sucess" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
