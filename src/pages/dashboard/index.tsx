import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import Styles from "./styles";
import { Icon } from "@iconify/react";
import { TotalCard } from "../../components/card/total-card";
import ReportTable from "../../components/tables";

export const Dashboard = () => {
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
              icon="material-symbols:insert-chart"
            />
            <Typography variant="h6" style={{ color: "#000" }}>
              Dashboard
            </Typography>
          </Grid>
        </Stack>

        <Grid sx={Styles.card} container spacing={8}>
          <Grid item xs={9} md={3}>
            <TotalCard title={"Total Members"} value={"1,620"} />
          </Grid>
          <Grid item xs={9} md={3}>
            <TotalCard title={"Enrolled Members"} value={"1,210"} />
          </Grid>
          <Grid item xs={9} md={3}>
            <TotalCard title={"Active Now"} value={"208"} />
          </Grid>
        </Grid>

        <ReportTable />
      </Container>
    </>
  );
};
