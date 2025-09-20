/**
 * ButtonSection 컴포넌트
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 *
 * Props:
 * @param {object} sx - 추가 스타일링 [Optional]
 *
 * Example usage:
 * <ButtonSection />
 */
import { Box, Typography, Button, Grid } from '@mui/material';

function ButtonSection({ sx = {} }) {
  // 버튼 variant 종류
  const variants = ['contained', 'outlined', 'text'];

  // 버튼 color 종류
  const colors = ['primary', 'secondary', 'error'];

  // 버튼 클릭 핸들러
  const handleButtonClick = (variant, color) => {
    alert(`${variant} ${color} 버튼이 클릭되었습니다!`);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, ...sx }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          textAlign: 'center',
          fontSize: { xs: '1.75rem', md: '2.125rem' }
        }}
      >
        Button 컴포넌트
      </Typography>

      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              textTransform: 'capitalize',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            {variant} Buttons
          </Typography>

          <Grid container spacing={2}>
            {colors.map((color) => (
              <Grid size={{ xs: 12, sm: 4 }} key={color}>
                <Button
                  variant={variant}
                  color={color}
                  fullWidth
                  onClick={() => handleButtonClick(variant, color)}
                  sx={{
                    py: 1.5,
                    textTransform: 'capitalize',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  {color}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default ButtonSection;