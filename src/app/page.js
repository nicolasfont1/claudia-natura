"use client";
import { CssVarsProvider } from '@mui/joy/styles';
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
import SearchIcon from '@mui/icons-material/Search';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Box from "@mui/system/Box";

export default function Home() {
  return (
    <CssVarsProvider>
      <Stack direction="column" justifyContent="space-between" sx={{ minHeight: '100svh', position: 'relative' }}>
        <Box sx={{ paddingBottom: '50px' }}>
          <Navbar />
          <Tabs aria-label="Application tabs" defaultValue={0}>
            <TabList tabFlex={1}>
              <Tab orientation='vertical'>
                <ListItemDecorator>
                  <FormatListBulletedIcon sx={{ color: "neutral" }} />
                </ListItemDecorator>
              </Tab>
              <Tab orientation='vertical'>
                <ListItemDecorator>
                  <SearchIcon sx={{ color: "neutral" }} />
                </ListItemDecorator>
              </Tab>
              <Tab orientation='vertical'>
                <ListItemDecorator>
                  <ShoppingCartIcon sx={{ color: "neutral" }} />
                </ListItemDecorator>
              </Tab>
            </TabList>
            <TabPanel value={0} sx={{ bgcolor: '#bcaaa4' }}>
              <ProductList />
            </TabPanel>
            <TabPanel value={1} sx={{ bgcolor: '#bcaaa4' }}>
              <b>Búsqueda</b>
            </TabPanel>
            <TabPanel value={2} sx={{ bgcolor: '#bcaaa4' }}>
              <b>Carrito de compras</b>
            </TabPanel>
          </Tabs>
          <Footer />
        </Box>
      </Stack>
    </CssVarsProvider>
  );
}
