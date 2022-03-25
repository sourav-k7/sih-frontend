import { Box, Typography } from "@mui/material";

const DataDisplay = ({ title, data }) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      width="70%"
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        fontSize={"30px"}
        fontWeight="semi-bold"
      >
        {title}:
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        fontSize={"26px"}
        fontWeight="500"
      >
        {data}
      </Typography>
    </Box>
  );
};

export default DataDisplay;
