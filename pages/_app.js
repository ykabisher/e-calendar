import { useState } from 'react';

// theme
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
// components
import { BaseOptionChartStyle } from '../components/charts/BaseOptionChart';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../components/layouts/dashboard/DashboardNavbar';
import DashboardSidebar from '../components/layouts/dashboard/DashboardSidebar';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeConfig>
        <GlobalStyles />
        <BaseOptionChartStyle />
        <RootStyle>
          <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
          <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
          <MainStyle>
            <Component {...pageProps} />
          </MainStyle>
        </RootStyle>
      </ThemeConfig>
    </>
  )
}