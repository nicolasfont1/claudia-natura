"use client";
import { CssVarsProvider } from '@mui/joy/styles';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Typography from "@mui/joy/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from "@mui/joy/Stack";

export default function Home() {
  return (
    <CssVarsProvider>
      <Stack direction="column" justifyContent="space-between" sx={{minHeight: '100vh'}}>
        <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList tabFlex={1}>
            <Tab>
              <Typography
                fontWeight="md"
                level="body-md"
                textColor="neutral"
                endDecorator={<FormatListBulletedIcon sx={{ color: "neutral", fontSize: 18 }} />}>
                Catálogo
              </Typography>
            </Tab>
            <Tab>
              <Typography
                fontWeight="md"
                level="body-md"
                textColor="neutral"
                endDecorator={<ShoppingCartIcon sx={{ color: "neutral", fontSize: 18 }} />}>
                Mi pedido
              </Typography>
            </Tab>
          </TabList>
          <TabPanel value={0} sx={{ bgcolor: '#bcaaa4' }}>
            <ProductList />
          </TabPanel>
          <TabPanel value={1} sx={{ bgcolor: '#bcaaa4' }}>
            <b>Carrito de compras</b>
          </TabPanel>
        </Tabs>
        <Footer />
      </Stack>
    </CssVarsProvider>
  );
}
