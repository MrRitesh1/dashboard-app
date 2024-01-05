/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Styles from "./styles";

const DashBoardTopTabBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Button
          onClick={() => {
            navigate("/home");
          }}
          sx={Styles.button}
        >
          Home
        </Button>

        <Button
          onClick={() => {
            navigate("/admin/foodOrder");
          }}
          sx={Styles.button}
        >
          Food Order
        </Button>

        <Button
          onClick={() => {
            navigate("/admin/manageMenu");
          }}
          sx={Styles.button}
        >
          Manage Menu
        </Button>

        <Button
          onClick={() => {
            navigate("/admin");
          }}
          sx={Styles.button}
        >
          Payment
        </Button>
        <Button
          onClick={() => {
            navigate("/admin");
          }}
          sx={Styles.button}
        >
          Help
        </Button>
      </Box>
    </>
  );
};

export default DashBoardTopTabBar;
