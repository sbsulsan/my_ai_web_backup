/**
 * MenuSection 컴포넌트
 * MUI Menu 컴포넌트를 활용한 다양한 메뉴 스타일을 보여주는 섹션
 *
 * Props:
 * @param {object} sx - 추가 스타일링 [Optional]
 *
 * Example usage:
 * <MenuSection />
 */
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import {
  ArrowDropDown,
  AccountCircle,
  Settings,
  Logout,
  Home,
  Info,
  ContactMail,
  Help
} from '@mui/icons-material';

function MenuSection({ sx = {} }) {
  // 각 메뉴의 열림/닫힘 상태와 앵커 엘리먼트를 관리
  const [menuStates, setMenuStates] = useState({
    basic: { anchorEl: null, open: false },
    withIcons: { anchorEl: null, open: false },
    profile: { anchorEl: null, open: false }
  });

  // 메뉴 열기 핸들러
  const handleMenuOpen = (menuType, event) => {
    setMenuStates(prev => ({
      ...prev,
      [menuType]: {
        anchorEl: event.currentTarget,
        open: true
      }
    }));
  };

  // 메뉴 닫기 핸들러
  const handleMenuClose = (menuType) => {
    setMenuStates(prev => ({
      ...prev,
      [menuType]: {
        anchorEl: null,
        open: false
      }
    }));
  };

  // 메뉴 아이템 클릭 핸들러
  const handleMenuItemClick = (menuType, itemName) => {
    alert(`${menuType} 메뉴의 "${itemName}" 항목이 클릭되었습니다!`);
    handleMenuClose(menuType);
  };

  // 메뉴 설정 데이터
  const menuConfigs = [
    {
      type: 'basic',
      title: 'Basic Menu',
      buttonText: '기본 메뉴',
      buttonVariant: 'contained',
      items: [
        { name: '홈', icon: null },
        { name: '소개', icon: null },
        { name: '연락처', icon: null },
        { name: '도움말', icon: null }
      ]
    },
    {
      type: 'withIcons',
      title: 'Menu with Icons',
      buttonText: '아이콘 메뉴',
      buttonVariant: 'outlined',
      items: [
        { name: '홈', icon: <Home /> },
        { name: '소개', icon: <Info /> },
        { name: '연락처', icon: <ContactMail /> },
        { name: '도움말', icon: <Help /> }
      ]
    },
    {
      type: 'profile',
      title: 'Profile Menu',
      buttonText: '프로필 메뉴',
      buttonVariant: 'text',
      items: [
        { name: '내 계정', icon: <AccountCircle /> },
        { name: '설정', icon: <Settings /> },
        { name: '로그아웃', icon: <Logout /> }
      ]
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
        Menu 컴포넌트
      </Typography>

      <Grid container spacing={4}>
        {menuConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 4 }} key={config.type}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                {config.title}
              </Typography>

              <Button
                variant={config.buttonVariant}
                endIcon={<ArrowDropDown />}
                onClick={(event) => handleMenuOpen(config.type, event)}
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  py: 1.5
                }}
              >
                {config.buttonText}
              </Button>

              <Menu
                anchorEl={menuStates[config.type].anchorEl}
                open={menuStates[config.type].open}
                onClose={() => handleMenuClose(config.type)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    minWidth: 180,
                    mt: 1
                  }
                }}
              >
                {config.items.map((item, index) => (
                  <div key={item.name}>
                    <MenuItem
                      onClick={() => handleMenuItemClick(config.title, item.name)}
                      sx={{
                        py: 1.5,
                        px: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' }
                      }}
                    >
                      {item.icon && (
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </Box>
                      )}
                      {item.name}
                    </MenuItem>
                    {index < config.items.length - 1 && config.type === 'profile' && (
                      <Divider />
                    )}
                  </div>
                ))}
              </Menu>

              <Typography
                variant="caption"
                sx={{
                  mt: 2,
                  color: 'grey.600',
                  fontSize: '0.75rem'
                }}
              >
                버튼을 클릭하여 메뉴를 확인하세요
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          Menu 컴포넌트 특징
        </Typography>
        <Paper
          elevation={1}
          sx={{
            p: 3,
            backgroundColor: 'info.50'
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              lineHeight: 1.6
            }}
          >
            • <strong>Basic Menu:</strong> 기본적인 텍스트 메뉴 아이템들
            <br />
            • <strong>Menu with Icons:</strong> 아이콘이 포함된 메뉴 아이템들
            <br />
            • <strong>Profile Menu:</strong> 프로필 관련 메뉴로 구분선(Divider) 포함
            <br />
            • 각 메뉴 아이템 클릭 시 알림창으로 선택된 항목 표시
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default MenuSection;