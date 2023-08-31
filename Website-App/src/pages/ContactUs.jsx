import React from 'react';
import { Fade } from "react-awesome-reveal";
import Footer from "./Footer";
import { FaDiscord, FaWhatsapp, FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';
import {SiLinktree} from 'react-icons/si'

import { Divider,  Container, Text, Group,   Button, Title, ActionIcon,   } from '@mantine/core';




const ContactUs = () => {

  return (
    <div className="mainContainer">
      <Container sx={{ maxWidth: "false" }}>

        <Title order={1} align="center" color="white" className="subHead" sx={{  fontSize: "clamp(25px, 35px, 1rem)",}}>
          Contact Us
        </Title>
        <Fade duration={2000}>
          <Button
            component="a"
            href="mailto:info@salientyachts.com?subject=NFT-yachts"
            target="_blank"
            sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Email:
            info@salientyachts.com</Button>
        </Fade>
        <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />

        <Fade duration={2000}>
          <Title order={3} color="white" align="center" className="subHead" sx={{ margin: '0.5rem 0 0.5rem' }}>
            Social Media:
          </Title>

          <Group sx={{ display: 'flex', justifyContent: 'center' }} >
            <Button leftIcon={<FaDiscord />}
              component="a"
              href="https://discord.gg/ZJChTwBhE2"
              target="_blank"
              sx={{
                margin: '0.5rem 0 0.5rem', width: 'fit-content', background:
                  'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                    transform: 'scale(1.1)',
                  },
              }}>
              Discord</Button>

            <Button leftIcon={<FaTwitter />}
              component="a"
              href="https://twitter.com/SalientYachts"
              target="_blank"
              sx={{
                margin: '0.5rem 0 0.5rem', width: 'fit-content', background:
                  'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                    transform: 'scale(1.1)',
                  },
              }}>
              Twitter</Button>

            <Button leftIcon={<FaTelegram />}
              component="a"
              href="https://t.me/SalientYachts"
              target="_blank"
              sx={{
                margin: '0.5rem 0 0.5rem', width: 'fit-content', background:
                  'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                    transform: 'scale(1.1)',
                  },
              }}>
              Telegram </Button>

            <Button leftIcon={<FaFacebook />}
              component="a"
              href="https://www.facebook.com/SalientYachts"
              target="_blank"
              sx={{
                margin: '0.5rem 0 0.5rem', width: 'fit-content', background:
                  'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                    transform: 'scale(1.1)',
                  },
              }}>
              Facebook</Button>

              <Button leftIcon={<SiLinktree />}
              component="a"
              href="https://linktr.ee/salientyachts"
              target="_blank"
              rel="noreferrer"
              sx={{
                margin: '0.5rem 0 0.5rem', width: 'fit-content', background:
                  'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                    transform: 'scale(1.1)',
                  },
              }}>
              LinkTree</Button>

          </Group>

          <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
        </Fade>

        <Fade duration={2000}>
          <Title order={3} color="white" align="center" className="subHead" sx={{ margin: '0.5rem 0 0.5rem' }}>
            Call:
          </Title>

          <Group sx={{ display: 'flex', justifyContent: 'center' }}>
            <Text align="center" color="white" sx={{ margin: '0.5rem 0 0.5rem' }}>
              Clinton: +27 73 797 7338
              </Text>
              <ActionIcon variant="filled"
                component="a"
                href="https://api.whatsapp.com/send?phone=27737973778"
                target="_blank"
                sx={{
                  margin: '0.5rem 5px 0.5rem 5px', background:
                    'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                      transform: 'scale(1.1)',
                    },
                }}>
                <FaWhatsapp />
              </ActionIcon>
              <ActionIcon variant="filled"
                component="a"
                href="https://t.me/clintonk1984"
                target="_blank"
                sx={{
                  margin: '0.5rem 5px 0.5rem 5px', background:
                    'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                      transform: 'scale(1.1)',
                    },
                }}>
                <FaTelegram />
              </ActionIcon>
           
          </Group>

          <Group sx={{ display: 'flex', justifyContent: 'center' }}>
            <Text align="center" color="white" sx={{ margin: '0.5rem 0 0.5rem' }}>
              Dudley: +27 83 264 7614
              </Text>
              <ActionIcon variant="filled"
                component="a"
                href="https://api.whatsapp.com/send?phone=27832647614"
                target="_blank"
                sx={{
                  margin: '0.5rem 5px 0.5rem 5px', background:
                    'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                      transform: 'scale(1.1)',
                    },
                }}>
                <FaWhatsapp />
              </ActionIcon>
              <ActionIcon variant="filled"
                component="a"
                href="https://t.me/+27832647614"
                target="_blank"
                sx={{
                  margin: '0.5rem 5px 0.5rem 5px', background:
                    'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                      transform: 'scale(1.1)',
                    },
                }}>
                <FaTelegram />
              </ActionIcon>
          </Group>
        </Fade>





        <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />

      </Container>
      <Footer />
    </div >
  )
}
export default ContactUs;