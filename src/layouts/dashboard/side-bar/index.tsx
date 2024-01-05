import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, IconButton, Stack } from "@mui/material";
import { bgBlur } from "../../../utils/css-styles";
import Styles from "./styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Link, Drawer, Typography, Avatar } from "@mui/material";
import { menuConfig, otharConfig } from "./config";
import ResponsiveAppBar from "../app-bar";
import { useResponsive } from "../../../hooks/use-responsive";
import { AccountPopover } from "../app-bar/account";
import { FavoritePopover } from "../app-bar/favorite";
import { CartPopover } from "../app-bar/cart";
import Iconify from "../../../components/iconify/Iconify";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section";

// ----------------------------------------------------------------------

const NAV_WIDTH = 220;

const HEADER_MOBILE = 54;

const HEADER_DESKTOP = 82;

const StyledRoot = (styled(AppBar) as any)(({ theme }: any) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,

  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5, 0, 0),
  },
}));

export const SideBar = ({ onOpenNav }: any) => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton onClick={onOpenNav} sx={Styles.iconButton}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Stack
          direction="row"
          alignItems="center"
          style={{ width: "100%" }}
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <ResponsiveAppBar />
          </div>
          <FavoritePopover />
          <AccountPopover />
          <CartPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

// ----------------------------------------------------------------------

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));

export const Nav = ({ openNav, onCloseNav }: any) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg", "");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ mb: 4, mx: 0 }}>
        <Link underline="hover">
          <StyledAccount>
            <Avatar
              src={require("../../../assets/logo/Logo.png")}
              alt="photoURL"
            />

            <Box sx={{ ml: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#5A67BA", fontWeight: 700 }}
              >
                GOODFOOD
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
      <Typography variant="body2" style={{ marginLeft: 30, color: "#a6a6a6" }}>
        MENU
      </Typography>
      <NavSection data={menuConfig} />
      <Typography
        variant="body2"
        style={{ marginLeft: 30, color: "#a6a6a6", marginTop: 15 }}
      >
        OTHERS
      </Typography>
      <NavSection data={otharConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "#F1F2F7",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};
