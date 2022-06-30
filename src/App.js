import SideBar from "./Compo/SideBar";
// import Navbar from "./Compo/Navbar";
import Feed from "./Compo/Feed";
import RightBar from "./Compo/RightBar";
import Navbar from "./Compo/Navbar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material"
import Add from './Compo/Addbtn'
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
      palette:{
        mode:mode
      }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing = {2} justifyContent="space-between">
      <SideBar setMode={setMode} mode={mode}/>
      <Feed />
      <RightBar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
