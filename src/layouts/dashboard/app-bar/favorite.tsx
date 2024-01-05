import { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  IconButton,
  Popover,
} from "@mui/material";
import { useNavigate } from "react-router";
import Iconify from "../../../components/iconify/Iconify";

// ----------------------------------------------------------------------

export const FavoritePopover = () => {
  const [open, setOpen] = useState<any>(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
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
        <Iconify icon="bx:heart" />
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

            width: "50%",
            minHeight: 200,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="h6" noWrap>
            Favorite
          </Typography>
        </Box>

        <Divider sx={Styles.divider} />

        <Stack sx={{ p: 1 }}></Stack>
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
