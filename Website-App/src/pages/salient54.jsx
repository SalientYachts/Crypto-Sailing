
import { Fade } from "react-awesome-reveal";
import salienty54 from "../Assets/salienty54.jpg";
import lastFromProductionMould1 from "../Assets/salienty54/last-build-from-moulds-1.jpg";
import lastFromProductionMould2 from "../Assets/salienty54/last-build-from-moulds-2.jpg";
import lastFromProductionMould3 from "../Assets/salienty54/last-build-from-moulds-3.jpg";
import productionMould1 from "../Assets/salienty54/ProductionMould-1.jpg";
import productionMould2 from "../Assets/salienty54/ProductionMould-2.jpg";
import deckView from "../Assets/salienty54/deck-view.jpg";
import frontWaterlineView from "../Assets/salienty54/front-waterline-view.jpg";
import Footer from "./Footer";
import React from 'react';
import {  Button, Container, Title, Text, Divider,  } from '@mantine/core';

const Yachts1 = () => {

   

    return (
        <div className="mainContainer">
            <Container sx={{maxWidth:"false"}}>
                <Fade duration={2000}>
                <Title order={1}  color="white" align="center" className="overview" sx={{ margin: '1rem 0 1rem' }}>
                        Salient Y54 Offshore Cruiser
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <img src={salienty54} alt="salient one" className="mainImage" />
                </Fade>
                <Fade duration={2000}>
                    <Title order={2}   align="center" className="subHead" sx={{ margin: '2rem 0 2rem' }}>
                        Starting from US $ 980 000
                    </Title>
                </Fade>
                <Fade duration={2000}>
                    <Text align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        – 54ft Sail or Power Catamaran –
                    </Text>
                </Fade>
                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        We chose to purchase a hull mould, tried and tested for both performance and safety (Scape 51), for our production moulds!
                        <br />
                        Then we modernized the Cabins, Bridge Deck and Roof, Galley and Saloon areas,
                        <br />
                        and added wave piercing bows to suite the discerning market .
                    </Text>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={2} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Specifications
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Length 54ft
                        <br />
                        Beam 28ft
                        <br />
                        Disp. 10 000kgs
                        <br />
                        Engines 2 x 50hp+ Diesels
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Button component="a" href="https://salientyachts.com/Documents/salienty54-Offshore-Cruiser-Package.pdf" target="_blank"  rel="noreferrer" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the Y54 Offshore Cruiser Package Specifications
                    </Button>
                </Fade>


                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Manufactured under certification for commercial use 12 Passenger endorsement.
                        <br />
                        Up to 60 passengers for day trips pending Incline test once vessel is complete and launched.
                        <br />
                        
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Title order={3} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Build timeline – 12 months from date of order
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <Text   align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Manufactured from composite fiberglass and foam core using only approved materials.
                        <br />
                        Scott Bader’s industry leading products are approved by the key industry standards as appropriate, such as Lloyds, ClassNK, DNV-GL and RINA.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Button component="a" href="https://salientyachts.com/Documents/Scott-Bader-Marine-Guide.pdf" target="_blank"  rel="noreferrer" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the Scott Bader Marine Guide</Button>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Text   align="center" color="white" sx={{ margin: '2rem 0' }}>
                        In the words from an owner of the previous models: “Whether chartering with 65 passengers or racing in 25 knots upwind at 14 knots and,
                        <br />
                        as we found recently, hitting high twenties under spinnaker (28.2 knots!) she feels like a real race horse.”
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <Title order={3}  align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        These are pictures of the last yacht that came from the production moulds
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <div className="flex" style={{ marginBottom: '1rem' }}>
                        <img className="designImage" src={lastFromProductionMould1} alt="last from productionMould 1" />
                        <img className="designImage" src={lastFromProductionMould2} alt="last from productionMould 2" />
                        <img className="designImage" src={lastFromProductionMould3} alt="last from productionMould 3" />
                    </div>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

                <Fade duration={2000}>
                    <Title order={3} align="center" className="subHead" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Photos below show production moulds.
                    </Title>
                </Fade>

                <Fade duration={2000}>
                    <Text  align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Build photos show last power version built, but Sailing version is also available.
                    </Text>
                </Fade>

                <Fade duration={2000}>
                    <div className="flex" style={{ marginBottom: '1rem' }}>
                        <img className="designImage" src={productionMould1} alt="productionMould 1" />
                        <img className="designImage" src={productionMould2} alt="productionMould1 2" />
                        <img className="designImage" src={deckView} alt="deckView" />
                        <img className="designImage" src={frontWaterlineView} alt="front Waterline View" />
                    </div>
                </Fade>

                <Fade duration={2000}>
                    <Button component="a" href="http://dutoityachtdesign.co.za/the-scape-51-cat-an-owners-perspective/"  target="_blank"  rel="noreferrer" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the full Owners perspective on the production moulds</Button>
                </Fade>

                <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts1;