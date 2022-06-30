import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";


const RightBar
 = () => {
    return(
        <Box 
        flex={2} 
        p={2} 
        sx={{display: {xs:"none", sm:"block"}}}
        >

            <Box position="fixed">
                <Typography sx={{margin:"10px 00px"}} variant="h5" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2955247/pexels-photo-2955247.jpeg?cs=srgb&dl=pexels-ibadat-singh-2955247.jpg&fm=jpg" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1460892/pexels-photo-1460892.jpeg?cs=srgb&dl=pexels-engin-akyurt-1460892.jpg&fm=jpg" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1460892/pexels-photo-1460892.jpeg?cs=srgb&dl=pexels-engin-akyurt-1460892.jpg&fm=jpg" />
                </AvatarGroup>
                <Typography sx={{margin:"20px 00px"}} variant="h5" fontWeight={100} >Latest Photos:</Typography>
                <ImageList cols={3} rowHeight={170} gap={5}>
                <ImageListItem >
                    <img  
                       src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
                        alt="Remy Sharp"
                    />
                </ImageListItem>
                <ImageListItem >
                    <img  
                       src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
                        alt="Remy Sharp"
                    />
                </ImageListItem>
                <ImageListItem >
                    <img  
                       src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
                        alt="Remy Sharp"
                    />
                </ImageListItem>
                </ImageList>
                <Typography sx={{margin:"20px 00px"}} variant="h5" fontWeight={100} >Latest Conversation:</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1460892/pexels-photo-1460892.jpeg?cs=srgb&dl=pexels-engin-akyurt-1460892.jpg&fm=jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
    </List>

            </Box>
        </Box>
    )
}

export default RightBar
