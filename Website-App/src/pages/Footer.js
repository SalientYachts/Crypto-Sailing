import * as React from 'react';
import { Text, Box } from '@mantine/core';

const Footer = () => {
    return (
        <Box py={30} position='static' sx={{ background: '#52328a', marginTop: '30px',   }}>
            
                <Text align="center"  sx={{ width: '100%', fontSize: "clamp(15px, 25px, 1rem)", fontWeight: 'bold'}}>
                    Copyright © {new Date().getUTCFullYear()} Salient Yachts
                </Text>
           
        </Box>
    )
}

export default Footer;