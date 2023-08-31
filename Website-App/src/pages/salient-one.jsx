
import { Fade } from "react-awesome-reveal";
import React from 'react';
import inHull from "../Assets/salientOne/inHull.png";
import interior from "../Assets/salientOne/interior.jpg";
import mainDeck from "../Assets/salientOne/mainDeck.png";
import tag60 from "../Assets/salientOne/tag60.jpg";
import Footer from "./Footer";
import pic1 from "../Assets/salientOne/1.jpg";
import pic2 from "../Assets/salientOne/2.jpg";
import pic3 from "../Assets/salientOne/3.jpg";
import pic4 from "../Assets/salientOne/4.jpg";
import pic5 from "../Assets/salientOne/5.jpg";
import pic6 from "../Assets/salientOne/6.jpg";
import pic7 from "../Assets/salientOne/7.jpg";
import pic8 from "../Assets/salientOne/8.jpg";
import pic1a from "../Assets/salientOne/s1-sailing.jpg";
import pic1b from "../Assets/salientOne/s1-charter.jpg";

import ResponsivePlayer from "../components/video/ResponsivePlayer";
import { GiSailboat, } from 'react-icons/gi';
import { Button, Container, Title, Text, Grid, Divider, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Card, Image, List, ThemeIcon, Box } from '@mantine/core';

const Yachts = () => {

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
        <div className="mainContainer">
            <Container sx={{ maxWidth: "false" }}>

                <Title order={1} color="white" align="center" className="overview" sx={{ margin: '1rem 0 1rem' }}>
                    Salient One - Tag 50 Catamaran
                </Title>

                <AspectRatio ratio={16 / 9}>
                    <ResponsivePlayer
                        url="https://youtu.be/kOsHP7pporo"
                    />
                </AspectRatio>

                {/* <Fade duration={2000}>
                    <Title order={2} mb={15} color="white" align="center" className="subHead" sx={{ margin: '1rem 0 0 0' }}>
                        Buy This Yacht Now on OpenSea:
                    </Title>

                    <Grid sx={{ justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <Grid >
                            <Button leftIcon={<GiSailboat />}
                                component="a"
                                href="https://opensea.io/assets/ethereum/0x7d1480fed1fdc5eb460b22ba87d2558b76da248c/0"
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    margin: '0.5rem 0 0.5rem', width: '200px', background:
                                        'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                }}>
                                OpenSea</Button>
                        </Grid></Grid></Fade>
                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} /> */}

                <Fade duration={2000}>
                    <Title order={2} align="center" className="subHead" sx={{ margin: '2rem 0 2rem' }}>
                        Designed for speed and comfort.
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        This carbon fibre / resin composite vessel, manufactured by Vacuum Infusion, combines maximum strength with minimum weight.

                        This catamaran, is currently a blank canvas, which represents great value and has already completed a 580 mile coastal voyage.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Title order={2} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        LIMITED EDITITION:  Hull #2 of 2
                    </Title>
                    <Text align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Once in lifetime opportunity to own this rare yacht type
                    </Text>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />


                {/* @ts-ignore */}
                <Fade duration={2000}>
                    <Grid  >

                        <Card shadow="sm" pt="15px" pb="8px" radius="xl" sx={styles.card2} >
                            <Card.Section>
                                <Title order={3} align="center" m={15}>
                                    Salient One <br /> Offshore Cruiser Option
                                </Title>
                                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />
                                <Title order={2} align="center"  sx={{ margin: '2rem 0 2rem' }}>
                                Starting from  US $1 050 000
                            </Title>
                            </Card.Section>
                            <Card.Section>
                                <Image src={pic1a} mb={20} alt="Salient 1OC" />
                            </Card.Section>

                            <Button
                                component="a"
                                href="https://salientyachts.com/brochure.pdf" target="_blank" rel="noreferrer" sx={{ display: 'block', margin: 'auto', marginBottom: '1rem', width: 'fit-content' }}>Click here for a Sailing Brochure
                            </Button>

                        </Card>

                        <Card shadow="sm" pt="15px" pb="8px" radius="xl" sx={styles.card2} >
                            <Card.Section>
                                <Title order={3} align="center" m={15}>
                                    Salient One <br /> Day Charter Option
                                </Title>
                                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />
                                <Title order={2} align="center"  sx={{ margin: '2rem 0 2rem' }}>
                                Starting from US $540 000
                            </Title>
                            </Card.Section>
                            <Card.Section>
                                <Image src={pic1b} mb={20} alt="Salient 1OC" />
                            </Card.Section>

                            <Button
                                component="a"
                                href="https://salientyachts.com/brochure2.pdf" target="_blank" rel="noreferrer" sx={{ display: 'block', margin: 'auto', marginBottom: '1rem', width: 'fit-content' }}>Click here for a Day Charter Brochure
                            </Button>

                        </Card>
                    </Grid>
                </Fade>


                

                <Fade duration={2000}>
                    <Title order={3} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        For the discerning investor :
                    </Title>
                </Fade>


                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Considering her pedigree, upgrading Salient One to a Luxury Cruising Catamaran can lift the value to over $2’000’000.

                        Our vision includes Lithium-Ion batteries, a solar system, and a completely customized finish for the client with singular tastes.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Designed by Greg Young, the TAG 50 is a perfect blend between sailing enjoyment, cruising comfort, performance and ease of ownership.
                        <br />
                        The unique and innovative layout sets the standard and breaks into new territory altogether.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Imagine …… a super yacht size owners cabin, full beam cockpit/saloon living areas, 2 private (owners hull style) guest cabins,
                        massive galley, dedicated outboard sailing cockpits and much, much more.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Built to high production standards, the TAG 50 is also affordable, however the bottom-line is the enjoyment of sailing and getting precise feedback and exhilaration at the helm.
                        <br />
                        This vessel has a range of features that set the TAG 50 apart, yet the overall foundation for this design is based on a very pleasing and timeless aesthetic approach.
                        <br />
                        This is a beautiful looking vessel. Underlining this excellent and exciting appearance, the TAG 50 layout defies convention, yet it works so incredibly well.
                    </Text>
                </Fade>



                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <div className="flex">
                        <img className="designImage" src={mainDeck} alt="main deck" />
                        <img className="designImage" src={interior} alt="interior" />
                        <img className="designImage" src={inHull} alt="in hull" />
                    </div>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={2} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Preview
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <div className="flex" style={{ marginBottom: '1rem' }}>
                        <img className="designImage" src={pic1} alt="pic 1" />
                        <img className="designImage" src={pic2} alt="pic 2" />
                        <img className="designImage" src={pic3} alt="pic 3" />
                        <img className="designImage" src={pic4} alt="pic 4" />
                        <img className="designImage" src={pic5} alt="pic 5" />
                        <img className="designImage" src={pic6} alt="pic 6" />
                        <img className="designImage" src={pic7} alt="pic 7" />
                        <img className="designImage" src={pic8} alt="pic 8" />
                    </div>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={2} align="center" className="title" sx={{ margin: '2rem 0 2rem' }}>
                        Her sister ship - Tag 60
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <Title order={2} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        The Tag 60 catamaran can sail at 20% faster than wind speed and able to ‘FLY’ a hull.
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <div className="flex">
                        <img src={tag60} alt="tag - 60" style={{ width: '80%', margin: 'auto' }} />
                    </div>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts;