
import { Fade } from "react-awesome-reveal";
import pic1 from "../Assets/mauritius/mauritius-1.jpg";
import pic2 from "../Assets/mauritius/mauritius-3.jpg";
import Footer from './Footer';
import React from 'react';
import { Image as ImageMC, Container, Title, Divider, Grid, Text, Button } from '@mantine/core';


const Mauritius = () => {
    return (

        <div className="mainContainer">
            <Container>
                <Fade duration={2000}>
                    <Title order={1} className="overview" align="center" sx={{
                        margin: '2rem 0 2rem',
                        fontSize: "clamp(18px, 38px, 2rem)",
                        color: "white"
                    }}>
                        Island Lifestyle <br /> Emigration to Mauritius
                    </Title>

                    <Title order={3} align="center" sx={{
                        margin: '2rem 0 2rem',
                        fontSize: "clamp(12px, 38px, 1rem)",
                        color: "white",
                    }}>
                        Do you want life on an exotic island while earning USD?
                    </Title>
                </Fade>

                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />



                <Grid  >
                    <ImageMC radius="xl" src={pic1} alt="pic 1" />

                    <Text align="left" style={{ listStylePosition: "inside", margin: '2rem 10px 2rem', fontWeight: '700', fontSize: "clamp(12px, 38px, 1rem)", color: "white" }}>
                        <br />If you or family want to emigrate?  Now more than ever is the right time!<br />
                        Own shares in a Yacht & Business as an investor for the occupation permit into Mauritius.
                        <br />
                        Buy parts of this package deal that includes the following:<br />
                        – Shares in a completed 52ft power / sailing yacht, with income from chartering <br />
                        – A time share for staying on board and use of the yacht, depending on your contribution.<br />
                        – Shares in a Charter business.<br />
                        – Occupation permit to live in Mauritius for 10 years.<br />
                        – Customizable options available.<br />
                        – Payment directly in USD, into a Mauritius account to qualify for the occupation permit.<br /><br />
                    </Text>

                </Grid>

                <Fade duration={2000}>
                    <Button
                        component="a"
                        href="http://salientyachts.com/Documents/Info-on-Mauritius.pdf"
                        target="_blank"
                        sx={{ display: 'block', margin: 'auto', marginTop: '15px', width: 'fit-content' }}>Click here for Additional Information on Mauritius</Button>
                </Fade>

                <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                  

                        <Grid  >
                            <ImageMC radius="lg" src={pic2} alt="pic 2" />
                        </Grid>

                        
                            <Title order={1} align="center" className="overview" sx={{
                                margin: '1rem 0 1rem',  
                                fontSize: "clamp(18px, 38px, 2rem)",
                                color: "white"
                            }}>
                                Company or private Asset and Chartering
                            </Title>

                            <Text align="center" color="white" sx={{ margin: '1rem 0 1rem' }}>
                                The relocation to Mauritius far outweighs the global economic climate and tax rates! An export company in Mauritius pays only 3% corporate tax<br />
                                <br />
                                Become proud part-owner of the brand-new yacht.
                                We will base it in Mauritius where they have 1,34 million tourists per year.
                                As a Chartering yacht we will budget for USD 2 000 per day for the bareboat. The boat will be available 20 weeks of the year for paid charters and the balance for owners and cleaning/maintenance.<br />
                                <br />
                                The yacht will be registered in Mauritius and will be the asset of the company, providing excellent security.<br />
                                (Or Privately owned depending on your individual investment goals)
                                There might be a few job opportunities to run the chartering operation of the business.
                            </Text>
                     


                    <Divider size="md" color="#1976d2" sx={{ width: '90%', margin: '1rem' }} />

                    
                        <Title align="center" className="overview" sx={{
                            margin: '2rem 0 2rem', align: "center", 
                            fontSize: "clamp(18px, 38px, 2rem)", color: "white"
                        }}>
                            Occupation permit to live in Mauritius
                        </Title>

                        <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                            From 4th June 2020, the minimum investment required to acquire an occupation permit (OP) as an investor, and live in Mauritius as a non-citizen, has been lowered to USD 50,000. The validity of an Occupation Permit has also been extended from three to 10 years. Apply for Permanent residency after 3 years. This type of permit enables non-citizens to reside or retire or open their own business in Mauritius.
                        </Text>

                   
                </Fade>



            </Container>
            <Footer />
        </div>

    )
}
export default Mauritius;