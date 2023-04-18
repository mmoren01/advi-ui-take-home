import { Container } from '@mui/material'

const styles = {
  main: {
    alignContent: 'center',
    m: 5,
  }
}

export default function Layout({ children }) {
  return (
    <Container component="main" sx={styles.main}>
      {children}
    </Container>
  )
}