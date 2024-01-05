import { Outlet } from "react-router-dom";

import { useState } from "react";
import { styled } from "@mui/material/styles";

import { Nav, SideBar } from "./side-bar";
import { Footer } from "./footer";
import Color from "../../utils/theme/color";
import { Divider } from "@mui/material";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});
const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: Color.white,
  overflow: "auto",
  minHeight: "100%",
  overflowY: "hidden",
  overflowX: "hidden",
  paddingTop: APP_BAR_MOBILE + 24,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
  },
}));

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <SideBar onOpenNav={() => setOpen(true)} />
      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>
        <Outlet />
        <Divider sx={{ color: "text.secondary" }} />
        <Footer />
      </Main>
    </StyledRoot>
  );
};
export default AdminLayout;
