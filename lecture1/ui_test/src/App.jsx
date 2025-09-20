import { Box, Container, Typography } from '@mui/material';
import ButtonSection from './components/sections/ButtonSection';
import InputSection from './components/sections/InputSection';
import MenuSection from './components/sections/MenuSection';
import FlexboxNavigation from './components/sections/FlexboxNavigation';

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 }
    }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700
          }}
        >
          UI Test Components
        </Typography>

        <ButtonSection />
        <InputSection />
        <MenuSection />
        <FlexboxNavigation />
      </Container>
    </Box>
  );
}

export default App
