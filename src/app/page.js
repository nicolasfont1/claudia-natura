"use client";
import { CssVarsProvider } from '@mui/joy/styles';
import ProductList from './components/ProductList';

export default function Home() {
  return (
    <CssVarsProvider>
      <ProductList />
    </CssVarsProvider>
  );
}
