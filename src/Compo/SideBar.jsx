import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch  } from "@mui/material";

import {  
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront, }
from "@mui/icons-material";


const SideBar = ({mode, setMode}) => {
    return(
        <Box flex={1} sx={{display: {xs:"none", sm:"block"}}}>
            <Box position="sticky">
                        <List>
                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home Page" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Article />
                                </ListItemIcon>
                                <ListItemText primary="Pages" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Group />
                                </ListItemIcon>
                                <ListItemText primary="Groups" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Storefront />
                                </ListItemIcon>
                                <ListItemText primary="Marketplace" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Person />
                                </ListItemIcon>
                                <ListItemText primary="Friends" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                                </ListItemButton>

                                <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                <ModeNight />
                                </ListItemIcon>
                                <Switch onChange={e=>setMode(mode === "dark" ? "light" : "dark")}/>
                                </ListItemButton>
                        </List>
            </Box>
        </Box>
    )
}

export default SideBar