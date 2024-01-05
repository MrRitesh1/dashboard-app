import { NavLink as RouterLink } from "react-router-dom";
import { Box, List, ListItemText } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { memo } from "react";

const NavSection = ({ data = [], ...other }: any) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <>
            <NavItem key={item.title} item={item} />
          </>
        ))}
      </List>
    </Box>
  );
};

export default memo(NavSection);
// ----------------------------------------------------------------------

const NavItem = ({ item }: any) => {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        "&.active": {
          color: "#3160ce",
          backgroundColor: "#dbe4f6",
          fontWeight: "400",
          fontSiza: "12px",
        },
        "&:hover": {
          color: "#3160ce",
          backgroundColor: "#dbe4f6",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};
