import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import Styles from "./styles";
import { Icon } from "@iconify/react";

export const FoodOrder = () => {
  return (
    <>
      <Container maxWidth={"xl"} style={Styles.container}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Grid sx={Styles.headersText}>
            <Icon
              width="30"
              height="30"
              style={{ marginRight: 5 }}
              icon="majesticons:shopping-cart"
            />
            <Typography variant="h6" style={{ color: "#000" }}>
              Food Order
            </Typography>
          </Grid>
        </Stack>
        <Card style={{ minHeight: 450 }}></Card>
      </Container>
    </>
  );
};
