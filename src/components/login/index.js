import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container maxWidth="sm">
      <Box sx={{ margin: "50px auto" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          component="div"
          gutterBottom
          textAlign={"center"}
          sx={{
            textDecoration: (theme) =>
              `underline ${theme.palette.primary.main}`,
          }}
        >
          LOGIN
        </Typography>

        <Box mb={1}>
          <Typography variant="h6" component="div">
            Email
          </Typography>
          <TextField fullWidth placeholder="johndoe@gmail.com" />
        </Box>
        <Box mb={1}>
          <Typography variant="h6" component="div">
            Password
          </Typography>

          <OutlinedInput
            fullWidth
            type={showPassword ? "text" : "password"}
            // value={values.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((state) => !state)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Box mb={2}>
          <Typography variant="h6" component="div">
            Department
          </Typography>
          <TextField fullWidth />
        </Box>
        
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button
            variant="contained"
            sx={{ color: "white" }}>
              login
            </Button>
          </Box>
        
      </Box>
    </Container>
  );
};

export default LoginPage;
