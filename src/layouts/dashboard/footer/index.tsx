import { Grid, Typography, useTheme, useMediaQuery, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { Styles } from "./styles";
import Color from "../../../utils/theme/color";

export const Footer = () => {
  const theme = useTheme<any>();
  const isSmallScreen = useMediaQuery<any>(theme.breakpoints.down("sm"));

  return (
    <Grid
      style={{
        display: "flex",
        // flexDirection: "row",
        padding: "30px 10px",
        flexWrap: "wrap",
        width: "100%",
        marginTop: "15px",
        backgroundColor: Color.white,
        marginInline: isSmallScreen ? 10 : 10,
      }}
    >
      <Grid container spacing={0} xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              flexDirection: "column",
              height: isSmallScreen ? 150 : 180,
            }}
          >
            <Typography
              variant="h6"
              color={"#000"}
              style={{ height: isSmallScreen ? 40 : 50 }}
            >
              Pages
            </Typography>

            <Typography sx={Styles.textLeft}> Home it work</Typography>

            <Typography sx={Styles.textLeft}>Pricing</Typography>
            <Typography sx={Styles.textLeft}>Blog</Typography>

            <Typography sx={Styles.textLeft}>Demo</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div
            style={{
              flexDirection: "column",
              height: isSmallScreen ? 130 : 160,
            }}
          >
            <Typography
              variant="h6"
              color={"#000"}
              style={{ height: isSmallScreen ? 40 : 50 }}
            >
              Service
            </Typography>

            <Typography sx={Styles.textLeft}>Shopify</Typography>
            <Typography sx={Styles.textLeft}>WordPress</Typography>
            <Typography sx={Styles.textLeft}> UI/UX Design</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              flexDirection: "column",

              height: isSmallScreen ? 200 : 230,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              color={Color.black}
              style={{ height: isSmallScreen ? 40 : 50 }}
            >
              Contact
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: isSmallScreen ? 50 : 60,
              }}
            >
              <StayCurrentPortraitIcon
                style={{
                  color: Color.black,
                  marginRight: 5,
                  height: isSmallScreen ? 18 : 18,
                }}
              />
              <Typography style={{ color: Color.black }}>
                (406) 555-0120
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: isSmallScreen ? 50 : 60,
              }}
            >
              <MailIcon
                style={{
                  color: Color.black,
                  marginRight: 5,
                  height: isSmallScreen ? 18 : 18,
                }}
              />
              <Typography style={{ color: Color.black }}>
                mangcoding123@gmail.com{" "}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: isSmallScreen ? 50 : 60,
              }}
            >
              <PlaceIcon
                style={{
                  color: Color.black,
                  marginRight: 5,
                  height: isSmallScreen ? 18 : 18,
                }}
              />
              <Typography style={{ color: Color.black }}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div
            style={{
              flexDirection: "column",
              height: isSmallScreen ? 180 : 200,
            }}
          >
            <Typography
              variant="h6"
              color={"#000"}
              style={{ height: isSmallScreen ? 40 : 50 }}
            >
              Social media
            </Typography>
            <img
              src={require("../../../assets/icons/facebook.png")}
              style={Styles.socialMediaIcon}
            />
            <img
              src={require("../../../assets/icons/Twitter.png")}
              style={Styles.socialMediaIcon}
            />
            <img
              src={require("../../../assets/icons/Linkdin.png")}
              style={Styles.socialMediaIcon}
            />
            <img
              src={require("../../../assets/icons/Insagram.png")}
              style={Styles.socialMediaIcon}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
