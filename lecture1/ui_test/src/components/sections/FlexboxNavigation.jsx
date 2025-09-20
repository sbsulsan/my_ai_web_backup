/**
 * FlexboxNavigation 컴포넌트
 * Flexbox를 사용한 네비게이션 바 구현
 *
 * Props:
 * @param {object} sx - 추가 스타일링 [Optional]
 *
 * Example usage:
 * <FlexboxNavigation />
 */
import { Box, Typography } from '@mui/material';

function FlexboxNavigation({ sx = {} }) {
  // 메뉴 항목들
  const menuItems = ['홈', '소개', '상품', '연락처', '설정'];

  // 메뉴 클릭 핸들러
  const handleMenuClick = (menuItem) => {
    alert(`${menuItem} 메뉴가 클릭되었습니다!`);
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
        Flexbox Navigation
      </Typography>

      {/* 네비게이션 바 */}
      <Box
        sx={{
          width: '100%',
          height: '60px',
          backgroundColor: '#2d3748',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          mb: 4,
          borderRadius: 1,
          boxShadow: 2
        }}
      >
        {/* 로고 박스 */}
        <Box>
          <Typography
            component="div"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={() => handleMenuClick('로고')}
          >
            MyWebsite
          </Typography>
        </Box>

        {/* 메뉴들 박스 */}
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
          }}
        >
          {menuItems.map((menuItem) => (
            <Typography
              key={menuItem}
              component="div"
              sx={{
                color: '#a0aec0',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onClick={() => handleMenuClick(menuItem)}
            >
              {menuItem}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* 설명 섹션 */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          Flexbox Navigation 특징
        </Typography>

        <Box
          sx={{
            p: 3,
            backgroundColor: 'grey.50',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.200'
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: 1.6,
              mb: 2
            }}
          >
            <strong>구조:</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: 1.6,
              mb: 2,
              pl: 2
            }}
          >
            • 큰 네비게이션 박스: 가로 전체, 높이 60px, 배경색 #2d3748
            <br />
            • 로고 박스: "MyWebsite" 텍스트 (왼쪽 정렬)
            <br />
            • 메뉴들 박스: 5개 메뉴 항목들 (오른쪽 정렬)
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: 1.6,
              mb: 2
            }}
          >
            <strong>스타일링:</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: 1.6,
              pl: 2
            }}
          >
            • 로고: 흰색, 굵게, 20px
            <br />
            • 메뉴 항목: 연한 회색(#a0aec0), 16px, 15px 간격
            <br />
            • 호버 효과: 흰색 변경 + 배경 투명도
            <br />
            • Flexbox 사용: justify-content: space-between으로 양 끝 정렬
          </Typography>
        </Box>
      </Box>

      {/* 순수 CSS 버전 코드 표시 */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          순수 HTML/CSS 코드
        </Typography>

        <Box
          sx={{
            p: 3,
            backgroundColor: '#f7fafc',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.300',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}
        >
          <Typography component="pre" sx={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<!-- HTML 구조 -->
<nav class="navbar">
  <div class="logo">MyWebsite</div>
  <div class="menu-container">
    <div class="menu-item">홈</div>
    <div class="menu-item">소개</div>
    <div class="menu-item">상품</div>
    <div class="menu-item">연락처</div>
    <div class="menu-item">설정</div>
  </div>
</nav>

/* CSS 스타일 */
.navbar {
  width: 100%;
  height: 60px;
  background-color: #2d3748;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

.logo:hover {
  opacity: 0.8;
}

.menu-container {
  display: flex;
  gap: 15px;
  align-items: center;
}

.menu-item {
  color: #a0aec0;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
}

.menu-item:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FlexboxNavigation;