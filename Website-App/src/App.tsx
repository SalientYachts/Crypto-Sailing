import * as React from 'react'
import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import "./styles/Home.module.css";
import { Suspense, useState } from 'react';
import { useHotkeys, useLocalStorage, useWindowScroll, useMediaQuery } from '@mantine/hooks';
import { Button, AppShell, ColorSchemeProvider, Navbar, Header, Affix, Transition, MantineProvider, Box, ActionIcon, } from '@mantine/core';
import { TbArrowBarToUp, } from 'react-icons/tb';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import './App.css';
import { Login } from "./components/login";
import SidebarMenu from './components/SidebarMenu';
import { ethers } from "ethers";
import  {BuyNFT}  from "./pages/BuyNFT";

//import {PlayGame} from './Pages/PlayGame'

const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const Homepage = React.lazy(() => import('./pages/Home'));
const Mauritius = React.lazy(() => import('./pages/Mauritius'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const About = React.lazy(() => import('./pages/Home'));
const CryptoSailing = React.lazy(() => import('./pages/CryptoSailing'));
const AllYachts = React.lazy(() => import('./pages/AllYachts'));
const SalientOne = React.lazy(() => import('./pages/salient-one'));
const Salient54 = React.lazy(() => import('./pages/salient54'));
const Salient64c = React.lazy(() => import('./pages/salient64c'));
const Start = React.lazy(() => import('./pages/Start'));


export default function App() {


  const [scroll, scrollTo] = useWindowScroll();
  const HeaderHeight = '@media (max-width: 800px)' > '768' ? '100' : '200';
  const scrollmedia = useMediaQuery('(min-width: 700px)');

  const [colorScheme, setColorScheme]: any = useLocalStorage({ key: 'color-scheme', defaultValue: 'dark' });
  const toggleColorScheme = () =>
    setColorScheme((current: string) => (current === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const [collapsed, setCollapsed]: any = useState(false)
  const toggleCollapsed: any = () => {
    setCollapsed(!collapsed);
  };










  return (

     <ScrollToTop>



      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>

          <AppShell className='appBackground'
            zIndex={9999}
            fixed

            header={
              <Header height={HeaderHeight} sx={{ backgroundColor: '#353535' }}>
                {/* Your Header here */}
                <TopNav toggleCollapsed={toggleCollapsed} collapsed={collapsed} /> 
              </Header>
            }

            navbar={
              <Navbar mt={16} p="md" hiddenBreakpoint="sm" hidden={!collapsed} width={{ sm: 300, lg: 300 }} >
                <Navbar.Section mx="-xs" px="xs">
                  {/* scrollable content here */}
                  <SidebarMenu toggleCollapsed={toggleCollapsed} /> 
                </Navbar.Section>
              </Navbar>
            }
          >



            {/* Your application here */}

            <Box >

              <Suspense
                fallback={<h1>Loading the page...</h1>}
              >
                <Routes>

                  <Route path="/" element={<CryptoSailing />} />

                  <Route element={<Mauritius />} path="/island-living" />
                  <Route element={<ContactUs />} path="/contact" />
                  <Route element={<CryptoSailing />} path="/CryptoSailing" />
                  <Route element={<AllYachts />} path="/view-yachts" />
                  <Route element={<About />} path="/About" />
                  <Route element={<BuyNFT />} path="/BuyNFT" />
                  <Route element={<SalientOne />} path="/salientOne" />
                  <Route element={<Salient54 />} path="/Yachts1" />
                  <Route element={<Salient64c />} path="/Yachts2" />
                  <Route element={<Start />} path="/invite" />
                  <Route element={<Start />} path="/start" />

                  {/* <Route element={<PlayGame />} path="/playgame" />  */}
                  {/* <Route path="*" element={<PageNotFound />} /> */}
                </Routes>
              </Suspense>
            </Box>

            {scrollmedia === true ?
              <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                  {(transitionStyles) => (
                    <Button
                      leftIcon={<TbArrowBarToUp />}
                      style={transitionStyles}
                      onClick={() => scrollTo({ y: 0 })}
                    >
                      Scroll to top
                    </Button>
                  )}
                </Transition>
              </Affix>

              :

              <Affix position={{ bottom: 50, right: 10 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                  {(transitionStyles) => (
                    <ActionIcon
                      style={transitionStyles}
                      size="lg"
                      color="blue"
                      variant="filled"
                      onClick={() => scrollTo({ y: 0 })}
                    >
                      <TbArrowBarToUp />
                    </ActionIcon>
                  )}
                </Transition>
              </Affix>

            }

          </AppShell>

        </MantineProvider>
      </ColorSchemeProvider >



     </ScrollToTop>
  );
}
