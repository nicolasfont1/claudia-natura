"use client";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Navbar from './components/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Box from "@mui/system/Box";
import { tabClasses } from '@mui/joy/Tab';
import Cart from './components/Cart';

export default function Home() {
  const theme = extendTheme({
    components: {
      JoyTab: {
        styleOverrides: {
          root: {
            background: '#dde8ee',
            [`&.${tabClasses.selected}`]: {
              background: '#FFFFFF',
              boxShadow: '0px -1px 5px rgba(255, 255, 255, 1)'
            },
          },
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme}>
      <Stack direction="column" justifyContent="space-between" sx={{ minHeight: '100svh', position: 'relative' }}>
        <Box sx={{ paddingBottom: '50px' }}>
          <Navbar />
          <Tabs aria-label="Application tabs" defaultValue={0}>
            <TabList tabFlex={1}>
              <Tab orientation='vertical'>
                <Typography fontWeight="md"
                  level="body-md"
                  textColor="neutral"
                  endDecorator={<FormatListBulletedIcon sx={{ color: "neutral", fontSize: 18 }} />}>
                  Productos
                </Typography>
              </Tab>
              <Tab orientation='vertical'>
                <Typography fontWeight="md"
                  level="body-md"
                  textColor="neutral"
                  endDecorator={<ShoppingCartIcon sx={{ color: "neutral", fontSize: 18 }} />}>
                  Mi pedido
                </Typography>
              </Tab>
            </TabList>
            <TabPanel value={0} sx={{ bgcolor: '#bcaaa4', p: 0 }}>
              <ProductList />
            </TabPanel>
            <TabPanel value={1} sx={{ bgcolor: '#bcaaa4' }}>
              <Cart />
            </TabPanel>
          </Tabs>
          <Footer />
        </Box>
      </Stack>
    </CssVarsProvider>
  );
}
