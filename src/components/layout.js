import { Container } from '@mui/material'

const styles = {
  main: {
    m: 5,
  }
}

export default function Layout({ children }) {
  return (
    <Container maxWidth="md" component="main" sx={styles.main}>
      {children}
    </Container>
  )
}