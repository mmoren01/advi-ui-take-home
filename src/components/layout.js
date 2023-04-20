import { Container, Typography } from '@mui/material'

const styles = {
  main: {
    width: '100%'
  },
  title: {
    textAlign: { sm: 'center' }
  }
}

export default function Layout({ children }) {
  return (
    <Container component="main" sx={styles.main}>
      <Typography variant="h1" sx={styles.title}>
        Advi-News
      </Typography>
      {children}
    </Container>
  )
}