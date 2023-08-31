
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Title, Text, Button, useMantineTheme, } from '@mantine/core';
import BottomCorner from '../Assets/botton-corner.png';
import TopCorner from '../Assets/top-corner.png';

import { useState, useEffect, } from "react";
import { useSearchParams } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks';

import { useForceUpdate } from '@mantine/hooks';

import axios from 'axios';

const API_URL = "https://app.salientyachts.com"



export default function Start() {

    const theme = useMantineTheme();

    const forceUpdate = useForceUpdate();
    const [searchparams1, setsearchparams1]: any = useSearchParams()
    const [searchparams2, setsearchparams2]: any = useSearchParams()
    const [loading, setLoading]: any = useState(true)
    const ref_id = searchparams1.get('ref');
    const source = searchparams2.get('src');



    useEffect(() => {
        localStorage.setItem('ref_id', ref_id);
        localStorage.setItem('source', source);

        axios.get(`${API_URL}/invites?src=${source}&ref=${ref_id}`
            //, { headers: headers }
        ).then((response) => {

            console.log('invite res ID :', response.data)
            console.log('invite res Name :', response.data.refererName)
        });
        //functionAfterAxiosRequest()
        forceUpdate()

    }, [])





    return (

        <Container sx={{
            maxWidth: 'none', display: 'flex', flexDirection: 'column',
            height: '80vh',
            '@media (min-width: 770px)': {
                backgroundColor: '#11284b',
                backgroundSize: '70%',
                backgroundPosition: 'left bottom',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${BottomCorner})`,
                alignItems: 'center',
            },

            '@media (max-width: 769px)': {
                backgroundColor: '#11284b',
                backgroundSize: '150%',
                backgroundPosition: 'left bottom',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${BottomCorner})`,
                alignItems: 'center',
                paddingLeft: '0px',
                paddingRight: '0px',
                //marginTop: '45px',
            },
        }}>

            <Button className="first_button"
                component={RouterLink}
                to="/"
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                my={10}
                sx={{
                    borderRadius: '50px',
                    width: '95%',
                    '@media (max-width: 769px)': { width: '95%' },
                    '@media (min-width: 770px)': { width: '500px' },
                }}>
                Enter Site & Get started
            </Button>




            <Container sx={{
                minHeight: '100%', maxWidth: 'none', display: 'flex', flexDirection: 'column',
                '@media (min-width: 770px)': {
                    backgroundSize: '80%',
                    paddingTop: '5px',
                    backgroundPosition: 'right top',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${TopCorner})`,
                    justifyContent: 'space-around',
                },

                '@media (max-width: 769px)': {
                    backgroundSize: '110%',
                    paddingTop: '5px',
                    backgroundPosition: 'right top',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${TopCorner})`,
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    justifyContent: 'space-evenly',
                },
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    margin: '10px',

                }}>

                    <Box>
                        <Title sx={{
                            '@media (min-width: 770px)': {
                                color: theme.white,
                                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                fontWeight: 900,
                                lineHeight: 1.05,
                                fontSize: 48,
                            },

                            '@media (max-width: 769px)': {
                                color: theme.white,
                                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                fontWeight: 900,
                                fontSize: 34,
                                lineHeight: 1.15,
                                paddingTop: '50px'
                            },
                        }}>
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                NFT
                            </Text>


                            <Text sx={{
                                opacity: 0.75,
                                backgroundColor: '#11284b',
                                width: 'fit-content',
                                borderTopRightRadius: '50px',

                                '@media (max-width: 769px)': {
                                    fontWeight: 900,
                                    fontSize: '27px',
                                },

                            }}>
                                Fractional Ownership <br /> of Real Sailing Yachts!
                            </Text>
                        </Title>

                        <Text sx={{
                            '@media (min-width: 770px)': {
                                color: theme.white,
                                maxWidth: '100%',
                                opacity: 0.75,
                                backgroundColor: '#11284b',
                                fontSize: 28,
                                mt: '30px',

                            },

                            '@media (max-width: 769px)': {
                                color: theme.white,
                                maxWidth: '100%',
                                opacity: 0.75,
                                backgroundColor: '#11284b',
                                fontSize: 18,
                                lineHeight: 1.15,
                                mt: '30px',
                            }
                        }} >

                            NFT holders earn rewards from chartering the yachts. Our model allows for 2 % monthly rewards, continuously streamed directly to NFT holders
                        </Text>

                        <div className="wrapper">
                            <Title sx={{
                                '@media (min-width: 770px)': {
                                    color: theme.white,
                                    textAlign: 'end',
                                    paddingTop: '20px',
                                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                    fontWeight: 900,
                                    lineHeight: 1.05,
                                    maxWidth: '100%',
                                    marginRight: '150px',
                                    fontSize: 58,
                                },

                                '@media (max-width: 769px)': {
                                    color: theme.white,
                                    textAlign: 'end',
                                    paddingTop: '20px',
                                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                                    fontWeight: 900,
                                    maxWidth: '100%',
                                    //marginRight: '100px',
                                    fontSize: 36,
                                    lineHeight: 1.15,
                                },
                            }}>
                                <div className="main-div main-div1">
                                    <Text
                                        component="span"
                                        inherit
                                        variant="gradient"
                                        gradient={{ from: 'pink', to: 'yellow' }}
                                    >
                                        24% APR
                                    </Text>
                                </div>
                            </Title>
                        </div>
                    </Box>


                </Box>
                <Box >
                    <Text sx={{
                        '@media (min-width: 770px)': {
                            color: theme.white,
                            maxWidth: '100%',
                            fontSize: 28,
                            paddingLeft: '30px',
                            marginBottom: '20px',
                        },

                        '@media (max-width: 769px)': {
                            color: theme.white,
                            maxWidth: '100%',
                            fontSize: 18,
                            lineHeight: 1.15,
                            paddingLeft: '20px',
                        }
                    }}>
                        Each Yacht is comprehensively insured <br />
                        This effectively means that your NFT is indirectly insured through its asset backing!
                    </Text>
                </Box>
            </Container>

        </Container >
    )
}


