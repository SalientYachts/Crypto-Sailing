
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import salienty64c from "../Assets/tsalienty64c.jpg";
import salientOnepic from "../Assets/tsalientOne.jpg";
import salienty54 from "../Assets/tsalienty54.jpg";
import { Card, Image, Button, Container, Title,  Grid, Divider } from '@mantine/core';
import React from 'react';
import Footer from './Footer.js'



export default function AllYachts() {




  return (

    <div style={{ minHeight: '100vh', width: '100%' }}>
      <Container sx={{maxWidth: "none"}}>
        <Fade duration={2000}>
        <Title order={1} color="white" align="center" className="overview" sx={{ fontSize: "clamp(25px, 35px, 1rem)", }}>
            Our Product Line
          </Title>
        </Fade>

        <Grid sx={{margin:"0px", justifyContent:"center"}}>
          
        

          <Card sx={{ boxShadow: "1px -1px 12px 3px #0cfbf8", maxWidth: "400px", minWidth: "200px", margin: "15px" }}>
          <Title order={3} align="center" mb={20}>
          Salient One <br /> TAG 50 Limited
          </Title>
          <Card.Section>
            <Image src={salientOnepic} mb={20}
              alt="Salient One" />
          </Card.Section>

          
            <Button sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
              component={Link} to="/salientOne" >CLICK HERE FOR DETAILS</Button>
         
        </Card>


          <Card sx={{ boxShadow: "1px -1px 12px 3px #0cfbf8", maxWidth: "400px", minWidth: "200px", margin: "15px" }}>
            <Title order={3} align="center" mb={20}>
              Salient Y54 <br /> Offshore Cruiser
            </Title>
            <Card.Section>
              <Image src={salienty54} mb={20}
                alt="Salient Y54" />
            </Card.Section>

           
              <Button sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
                component={Link} to="/Yachts1" >CLICK HERE FOR DETAILS</Button>
           
          </Card>

          <Card sx={{ boxShadow: "1px -1px 12px 3px #0cfbf8", maxWidth: "400px", minWidth: "200px", margin: "15px" }}>
            <Title order={3} align="center" mb={20} >
              Salient Y64C <br /> Full Carbon Cruiser
            </Title>
            <Card.Section>
              <Image src={salienty64c} mb={20}
                alt="Salient Y64C" />
            </Card.Section>

           
              <Button sx={{ textAlign: 'center', boxShadow: "1px -1px 6px 1px #0cfbf8", display: 'block', fontSize: "1rem", m: '0.5rem' }}
                component={Link} to="/Yachts2" >CLICK HERE FOR DETAILS</Button>
         
          </Card>
        </Grid >
        <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 3, width: '90%', margin: '1rem' }} />

        <Fade duration={2000}>
          <div className="flex">

          </div>
          <Title order={3} align="center" className="title" sx={{ margin: '1rem 1rem 0 1rem' }}>
            3D Virtual View<br /> Coming soon...
          </Title>
        </Fade>

      </Container >
      <Footer />
    </div >

  )
}
;