import React from 'react'
import salienty64c from "../Assets/salienty64c.jpg";
import salientOne from "../Assets/salientOne.jpg";
import salienty54 from "../Assets/salienty54.jpg";
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import { Link } from 'react-router-dom';
//import binance from '../Assets/logo/binance.png';
import PartnerChainlink from '../Assets/logo/PartnerChainlink.svg';
import partnerOpenSeaclub from '../Assets/logo/partnerOpenSea-club.png';
import partnerOpenSeayacht from '../Assets/logo/partnerOpenSea-yacht.png';
import partnerFilecoin from '../Assets/logo/partnerFilecoin.png';
import partnercointelegraph from '../Assets/logo/partnercointelegraph.svg';
import partnerIPFS from '../Assets/logo/partnerIPFS.png';
//import partnerMoralis from '../Assets/logo/partnerMoralis.svg';
import partnerHackernoon from '../Assets/logo/partnerHackernoon.png';
import partnercoinpedia from '../Assets/logo/partnercoinpedia.png';
import partnerKenzo from '../Assets/logo/KENZO.png';
import ResponsivePlayer from "../components/video/ResponsivePlayer";
import { MdEngineering as EngineeringIcon, } from "react-icons/md"
import { Card, Image, Button, Container, Title, Text, Grid, Divider, AspectRatio, List, ThemeIcon, Box } from '@mantine/core';




export default function Home() {

    const styles = {
        card1: {
            boxShadow: "1px -1px 12px 3px #0cfbf8",
            maxWidth: "95%",
            margin: "15px"

        },
        card2: {
            '@media (min-width: 850px)': {
                boxShadow: "1px -1px 12px 3px #0cfbf8",
                maxWidth: "45%",
                minWidth: "200px",
                margin: "15px"
            },

            '@media (max-width: 849px)': {
                boxShadow: "1px -1px 12px 3px #0cfbf8",
                maxWidth: "95%",
                minWidth: "200px",
                margin: "15px"
            },

        },
        partner1: {
            width: '8rem',
            margin: '2rem',
        },
        partner2: {
            width: '12rem',
            margin: '2rem',
        },
    };

    return (

        <Container className="mainContainer">

            <Title order={1} color="white" align="center" className="overview" mb={15} sx={{ fontSize: "clamp(30px, 45px, 1rem)", }}>
                Our Vision
            </Title>
            <Text color="white" align="center" sx={{ width: '90%', margin: 'auto' }}>
                    Our primary goal is to make yacht ownership accessible to everyone around the world.
                    <br /><br />
                    We achieve this through fractional asset ownership, utilizing blockchain and NFT technologies. A yacht can be divided into fractional shares with each share allocated to a NFT as part of a collection. Built into the NFT smart contract is our rewards program which uses our platform token.
                    <br /><br />
                    We named the token WIND. In the same way that wind keeps the yachts sailing, driving them on to their destination, WIND will power us forward and on to success!
                    This reward is automatically distributed.
                    
                    <br /><br />
                    Yacht ownership is only the first step in our planned ecosystem. We want expand this to include construction of marinas at various locations around the world. Our yachts can be based at these locations or travel between them.
                    <br /><br />
                    Our community can use their WIND rewards to book charters and holidays.
                    These rewards can be claimed at any time by direct interaction with the smart contract or by using our app.
                    <br /><br />
                </Text>

                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    Hybrid tokenization of Yacht Ownership into NFTs.
                </Title>

                <Text color="white" align="center"
                    sx={{ textDecoration: 'underline', width: '80%', margin: 'auto' }}>
                    We provide NFT Yachts as build contracts.
                    <br />
                    <br />
                </Text>
                <Text color="white" align="center"
                    sx={{ width: '100%', margin: 'auto' }}>
                    These are 1 of 1 NFTs and can be resold at any point up until the delivery of the yacht.
                    Afterwards the NFT is locked as non transferrable and is only unlocked on sale of the physical yacht to a new owner.
                    <br /><br />
                </Text>
                <Text color="white" align="center"
                    sx={{ textDecoration: 'underline', width: '80%', margin: 'auto' }}>
                    We also provide NFT fractional yacht ownership.
                    <br /><br />
                </Text>
                <Text color="white" align="center"
                    sx={{ width: '100%', margin: 'auto' }}>
                    These yachts are divided into fractional shares with each share allocated to a NFT as part of a collection.<br />
                    These yachts can then be used in Day Charters, providing these NFT holders with token rewards of 24% APR<br /><br />
                </Text>

                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={1} align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    Yacht Showcase
                </Title>
                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Card shadow="sm" pt="15px" pb="8px" radius="xl" sx={styles.card1} >
                    <Card.Section>
                        <Title order={3} align="center" m={15}>
                            Salient One
                        </Title>
                    </Card.Section>
                    <Card.Section>
                        <Image src={salientOne} mb={20} alt="Salient One" />
                    </Card.Section>

                    <Button mb={20} sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
                        component={Link} to="/salientOne"  >DETAILS</Button>

                </Card>
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Grid  >

                    <Card shadow="sm" pt="15px" pb="8px" radius="xl" sx={styles.card2} >
                        <Card.Section>
                            <Title order={3} align="center" m={15}>
                                Salient Y54 <br /> Offshore Cruiser
                            </Title>
                        </Card.Section>
                        <Card.Section>
                            <Image src={salienty54} mb={20} alt="Salient Y54" />
                        </Card.Section>

                        <Button mb={20} sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
                            component={Link} to="/Yachts1"  >DETAILS</Button>

                    </Card>

                    <Card shadow="sm" pt="15px" pb="8px" radius="xl" sx={styles.card2} >
                        <Card.Section>
                            <Title order={3} align="center" m={15}>
                                Salient Y64C <br /> Full Carbon Cruiser
                            </Title>
                        </Card.Section>
                        <Card.Section>
                            <Image src={salienty64c} mb={20} alt="Salient Y64C" />
                        </Card.Section>

                        <Button mb={20} sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
                            component={Link} to="/Yachts2"  >DETAILS</Button>

                    </Card>
                </Grid>
            </Fade>

            <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            {/* @ts-ignore */}
            <Fade duration={2000}>


            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    The Problem We Solve:
                </Title>
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Text color="white" align="center" sx={{ width: '90%', margin: 'auto' }}>
                    According to the April 2021 report from Grand View Research, the global yacht market—valued at $8.15 billion in 2020—is expected to expand at a compound annual growth rate (CAGR) of 5.2% from 2021 to 2028. Meanwhile, the global yacht charter market is projected to grow from $6.83 billion in 2020 to $10.82 billion in 2027—a CAGR of 6.6%.
                    <br /> <br />
                    A total of 242 new yachts came to market in Q1 2021, 93 less than the previous year. That is a supply shortage of 39%. Add an annual growth rate of 5% to the 242 new yachts means there will be a growing shortage of more than 12 yachts each year, compounding over the next 7 years.
                    <br /> <br />
                </Text>
                <Text color="white" align="center"
                    sx={{ fontWeight: 'bold', textDecoration: 'underline', width: '80%', margin: 'auto' }}>Salient Yachts is expanding into this market niche!
                </Text>
                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    Insurance
                </Title>
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Text color="white" align="center" sx={{ width: '90%', margin: 'auto' }}>
                    Each build contract is comprehensively insured during manufacture against any defects or damage right up until delivery. Each Charter Yacht is also comprehensively insured during its use.
                    <br /> <br />
                    This includes damage or loss due to accidental means, including perils of the seas or other navigable waters, stranding, sinking or collision; fire, earthquake, volcanic eruption or lightning; malicious acts; piracy; explosions, contact with aircraft, theft of the entire vessel or her boat(s); theft of machinery, gear or equipment.
                    <br /> <br />

                </Text>
                <Text color="white" align="center"
                    sx={{ fontWeight: 'bold', textDecoration: 'underline', width: '80%', margin: 'auto' }}>This effectively means that the initial value of your NFT is indirectly insured through its asset backing!
                </Text>
                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            </Fade>

         

           



{/*
                <Container sx={{ maxWidth: '900px' }}>

                    <Title order={1} align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                        Partners
                    </Title>
                    <div className="flex" >

                        <img style={styles.partner2} src={partnercointelegraph} alt="logo" />

                        <a href="https://kenzoventures.io/" target="_blank" rel="noreferrer">
                            <img style={styles.partner2} src={partnerKenzo} alt="logo" />
                        </a>

                        <a href="https://hackernoon.com/owing-yachts-with-an-nft" target="_blank" rel="noreferrer">
                            <img style={styles.partner2} src={partnerHackernoon} alt="logo" />
                        </a>

                        <img style={styles.partner2} src={binance} alt="logo" />

                        <a href="https://coinpedia.org/press-release/nft-yacht-ownership/" target="_blank" rel="noreferrer">
                            <img style={styles.partner2} src={partnercoinpedia} alt="logo" />
                        </a>

                        <a href="https://opensea.io/collection/salient-yachts" target="_blank" rel="noreferrer">
                            <img style={styles.partner2} src={partnerOpenSeayacht} alt="logo" />
                        </a>

                        <a href="https://opensea.io/collection/salient-yachts-club-membership" target="_blank" rel="noreferrer">
                            <img style={styles.partner2} src={partnerOpenSeaclub} alt="logo" />
                        </a>

                        <img style={styles.partner2} src={partnerFilecoin} alt="logo" />
                        <img style={styles.partner1} src={partnerIPFS} alt="logo" />
                        <img style={styles.partner1} src={PartnerChainlink} alt="logo" />


                    </div>
                     <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />

                </Container>

    */}
            </Fade>
           
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    About Us
                </Title>

            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={3} color="white" align="center" sx={{ margin: '2rem 0 2rem' }}>
                    Salient Yachts owns production moulds for manufacturing Luxury Catamarans.
                </Title>
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Text color="white" align="center" sx={{ width: '80%', margin: 'auto' }}>
                    Our shipyard is a complete marine facility.
                    <br />
                    Depending on the spec level, current lead times are less than 12 months.
                </Text>
                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />
            </Fade>
            {/* @ts-ignore */}
            <Fade duration={2000}>
                <Title order={2} align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
                    We have a full specialist marine facility with the following consultants:
                </Title>
            </Fade>
            <Box mt={30} sx={{

                '@media (min-width: 770px)': {
                    justifyContent: 'space-evenly',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },

                '@media (max-width: 769px)': {
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                },

            }}>
                <List icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <EngineeringIcon size={16} />
                    </ThemeIcon>
                }>
                    <List.Item>
                        Marine Engineering
                    </List.Item>
                    <List.Item>
                        Resin-Infusion Composite Engineering
                    </List.Item>
                    <List.Item>
                        Mechanical & Electrical specialists
                    </List.Item>

                </List>
                <List icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <EngineeringIcon size={16} />
                    </ThemeIcon>
                }>
                    <List.Item>
                        CAD Design and Rendering
                    </List.Item>
                    <List.Item>
                        Financial Services
                    </List.Item>
                    <List.Item>
                        Custom Stainless Steel
                    </List.Item>
                </List>
            </Box>

            <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />


            <Footer mb={30} />
        </Container>

    )
}
