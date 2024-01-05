import { Card, Typography } from "@mui/material";

interface cardInterface {
  title: string;
  value: string;
}

export const TotalCard = ({ title, value }: cardInterface) => {
  return (
    <Card style={Styles.main}>
      <Typography sx={Styles.text}>{title}</Typography>
      <Typography variant="h4" sx={Styles.text}>
        {value}
      </Typography>
    </Card>
  );
};

const Styles: any = {
  main: {
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    padding: "10px 0px 10px 0px",
  },
  text: { marginBlock: "2px", marginInline: "10px" },
};
