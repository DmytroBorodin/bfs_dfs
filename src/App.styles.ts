import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppWrapper = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FAFBFF",
  h1: {
    maxWidth: "700px",
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#333",
  },
  ".MuiButtonBase-root:focus": {
    outline: "none",
  },
});

export const ButtonsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px 0",
  gap: "32px",
});

export const AppButton = styled(Button)({
  padding: "1rem 2rem",
  minWidth: "150px",
  fontWeight: "600",
  border: "2px solid ##2E57A4",
});

export const ChartPageWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
