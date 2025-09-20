/**
 * InputSection 컴포넌트
 * MUI TextField의 다양한 variant를 보여주는 섹션
 *
 * Props:
 * @param {object} sx - 추가 스타일링 [Optional]
 *
 * Example usage:
 * <InputSection />
 */
import { useState } from 'react';
import { Box, Typography, TextField, Grid, Paper } from '@mui/material';

function InputSection({ sx = {} }) {
  // 각 input의 값을 관리하는 state
  const [inputValues, setInputValues] = useState({
    standard: '',
    outlined: '',
    filled: ''
  });

  // input 값 변경 핸들러
  const handleInputChange = (variant, value) => {
    setInputValues(prev => ({
      ...prev,
      [variant]: value
    }));
  };

  // TextField variant 설정
  const variants = [
    {
      variant: 'standard',
      label: 'Standard TextField',
      placeholder: 'Standard 형태의 입력 필드입니다'
    },
    {
      variant: 'outlined',
      label: 'Outlined TextField',
      placeholder: 'Outlined 형태의 입력 필드입니다'
    },
    {
      variant: 'filled',
      label: 'Filled TextField',
      placeholder: 'Filled 형태의 입력 필드입니다'
    }
  ];

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
        Input (TextField) 컴포넌트
      </Typography>

      <Grid container spacing={3}>
        {variants.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.variant}>
            <Box sx={{ mb: 3 }}>
              <TextField
                variant={item.variant}
                label={item.label}
                placeholder={item.placeholder}
                fullWidth
                value={inputValues[item.variant]}
                onChange={(e) => handleInputChange(item.variant, e.target.value)}
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': {
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }
                }}
              />

              {/* 실시간 입력값 표시 */}
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  backgroundColor: 'grey.50',
                  minHeight: '60px'
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mb: 1,
                    color: 'grey.600',
                    fontSize: '0.75rem'
                  }}
                >
                  실시간 입력값:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    color: inputValues[item.variant] ? 'text.primary' : 'grey.400',
                    fontStyle: inputValues[item.variant] ? 'normal' : 'italic'
                  }}
                >
                  {inputValues[item.variant] || '입력된 내용이 여기에 표시됩니다.'}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 전체 입력값 요약 */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          전체 입력값 요약
        </Typography>
        <Paper
          elevation={2}
          sx={{
            p: 3,
            backgroundColor: 'primary.50'
          }}
        >
          {variants.map((item) => (
            <Box key={item.variant} sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                <strong>{item.label}:</strong>{' '}
                {inputValues[item.variant] || '(빈 값)'}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

export default InputSection;