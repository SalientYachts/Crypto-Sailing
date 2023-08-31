import React from 'react';
import { Group, Button  } from '@mantine/core';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';
import {SiLinktree} from 'react-icons/si'

export default function SidebarFooter() {



    return (


        <Group sx={(theme) => ({
            '@media (min-width: 1200px)': { 
                maxWidth: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center", 
            },
            
            '@media (max-width: 1199px)': { 
                marginTop: '12px', 
                display: 'flex',
                flexDirection: 'row', 
                justifyContent: "center", 
            },
            '@media (max-width: 770px)': { 
                marginTop: '12px', 
                display: 'flex',
                flexDirection: 'row', 
                justifyContent: 'center',
            },
        })}
            >
            <Group>
            <Button component="a"
                href="https://discord.gg/ZJChTwBhE2"
                target="_blank"
                rel="noreferrer"
                sx={{
                    borderRadius: '50px', padding: '0 6px', background:
                        'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                            transform: 'scale(1.2)',
                        },
                }}>
                <FaDiscord size={24} />
            </Button>

            <Button component="a"
                href="https://twitter.com/SalientYachts"
                target="_blank"
                rel="noreferrer"
                sx={{
                    borderRadius: '50px', padding: '0 6px', background:
                        'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                            transform: 'scale(1.2)',
                        },
                }}>
                <FaTwitter size={24} />
            </Button>
            </Group>

            <Group>
            <Button component="a"
                href="https://t.me/SalientYachts"
                target="_blank"
                rel="noreferrer"
                sx={{
                    borderRadius: '50px', padding: '0 6px', background:
                        'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                            transform: 'scale(1.2)',
                        },
                }}>
                <FaTelegram size={24} />
            </Button>

            <Button component="a"
                href="https://linktr.ee/salientyachts"
                target="_blank"
                rel="noreferrer"
                sx={{
                    borderRadius: '50px', padding: '0 6px', background:
                        'linear-gradient(90deg, rgb(241, 198, 255) -16.66%, rgb(189, 10, 248) 24.05%, rgb(54, 92, 252) 99.31%), rgba(255, 255, 255, 0.25)', '&:hover': {
                            transform: 'scale(1.2)',
                        },
                }}>
                <SiLinktree size={24} />
            </Button>
            </Group>

        </Group>










    )


}