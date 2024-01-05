import { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  IconButton,
  Popover,
} from "@mui/material";
import { useNavigate } from "react-router";
import Iconify from "../../../components/iconify/Iconify";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: <Iconify icon="ic:baseline-favorite" />,
    path: "/home",
  },
  {
    label: "Card",
    icon: <Iconify icon="ic:baseline-favorite" />,
    path: "/Card",
  },
  {
    label: "Hart",
    icon: <Iconify icon="ic:baseline-favorite" />,
    path: "/Hart",
  },
  {
    label: "Profile",
    icon: <Iconify icon="ic:baseline-favorite" />,
    path: "/profile",
  },
];

// ----------------------------------------------------------------------

export const AccountPopover = () => {
  const [open, setOpen] = useState<any>(null);
  const navigate = useNavigate();

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleMenuItemClick = (path: any) => {
    navigate(path);
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,

          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              padding: 0.5,
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.2),
            },
          }),
        }}
      >
        <Iconify icon="iconamoon:profile" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            Ritesh Navadiya
          </Typography>
          <Typography variant="body2" sx={Styles.emailText} noWrap>
            riteshnavadiya@gmail.com
          </Typography>
        </Box>

        <Divider sx={Styles.divider} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleMenuItemClick(option.path)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={Styles.divider} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
};

const Styles = {
  divider: {
    borderStyle: "dashed",
  },
  emailText: {
    color: "text.secondary",
  },
};
