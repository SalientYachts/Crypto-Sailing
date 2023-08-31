
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Card, Image, Button, Container, Title, Grid, Divider, AspectRatio } from '@mantine/core';
import React from 'react';
import Footer from '../components/Footer'
import ResponsivePlayer from "../components/video/ResponsivePlayer"
import gameImage from "../Assets/CryptoSailing.png";

export default function AllYachts() {




  return (

    <div className="mainContainer">
      <Container sx={{ maxWidth: "none" }}>
        <Fade duration={2000}>
          <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
            Crypto Sailing Quest
          </Title>
          <Title order={3} align="center" mb={20}>
            NFT - Web3 Game <br /> Coming soon...
          </Title>
        </Fade>



        <Button
          component="a"
          href="" target="_blank" rel="noreferrer" sx={{ display: 'block', margin: 'auto', marginBottom: '1rem', width: 'fit-content' }}>Click here to download the game demo
        </Button>

        <Image src={gameImage} mb={20} alt="Crypto Game" />
        <AspectRatio ratio={16 / 9}>
          <ResponsivePlayer
            url=""
          />
        </AspectRatio>



        <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

        <Fade duration={2000}>
          <div className="flex">

          </div>

        </Fade>

      </Container >
      <Footer />
    </div >

  )
}
;