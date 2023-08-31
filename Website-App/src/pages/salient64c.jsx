
import { Fade } from "react-awesome-reveal";
import salienty64c from "../Assets/salienty64c.jpg";
import pic1 from "../Assets/salienty64c/1.jpg";
import Footer from "./Footer";
import React from 'react';
import { Button, Container, Title, Text, Divider, } from '@mantine/core';

const Yachts2 = () => {

    

    return (
        <div className="mainContainer">
            <Container sx={{maxWidth:"false"}}>
                <Fade duration={2000}>
                <Title order={1} color="white" align="center" className="overview" sx={{ margin: '1rem 0 1rem' }}>
                        Salient Y64C Performance Cruiser
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <img src={salienty64c} alt="salienty64c" className="mainImage" />
                </Fade>
                <Fade duration={2000}>
                    <Title order={1}  align="center" className="subHead" sx={{ margin: '2rem 0 2rem' }}>
                        Starting from US $ 2 200 000
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <Text   align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        64ft High performance Sailing Catamaran
                    </Text>
                </Fade>
                <Fade duration={2000}>
                    <Text   align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        This is larger, performance focused, full carbon fibre version of the Salient Y54 !
                        <br />
                        Featuring 4x Cabins with spacious en suite heads, Bridge Deck and Roof, Galley and Saloon areas,
                        <br />
                        owners cabin study / office and a separate crew cabin with head in the front bow.
                    </Text>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={3}  align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Specifications
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Length 64ft
                        <br />
                        Beam 31ft
                        <br />
                        Disp. 12 000kgs
                        <br />
                        Engines 2 x 80hp+ Diesels
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Button component="a" href="https://salientyachts.com/Documents/salienty64c-Offshore-Cruiser-Package.pdf" target="_blank"  rel="noreferrer" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the Y64C Offshore Cruiser Package Specifications
                    </Button>
                </Fade>


                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Manufactured under SAMSA certification for commercial use 12 Passenger endorsement.
                        <br />
                        Up to 60 passengers for day trips pending Incline test once vessel is complete and launched.
                        <br />
                        
                    </Text>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={1}  align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Build timeline – 12 months from date of order
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <Text   align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Manufactured from composite carbon fiber and foam core using only approved materials.
                        <br />
                        Scott Bader’s industry leading products are approved by the key industry standards as appropriate, such as Lloyds, ClassNK, DNV-GL and RINA.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Button component="a" href="https://salientyachts.com/Documents/Scott-Bader-Marine-Guide.pdf" target="_blank"  rel="noreferrer" sx={{ display: 'block', margin: 'auto', width: 'fit-content', marginBottom: '20px' }}>Click here for the Scott Bader Marine Guide</Button>
                </Fade>

                <Fade duration={2000}>
                    <div className="flex" style={{ marginBottom: '1rem' }}>
                        <img className="designImage" src={pic1} alt="pic 1" />
                    </div>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts2;