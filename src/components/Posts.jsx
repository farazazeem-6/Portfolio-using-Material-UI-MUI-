import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
const Posts = forwardRef((props, ref) => (
  <>
    <Container
      ref={ref}
      disableGutters
      maxWidth={"lg"}
      sx={{
        py: 4,
        px: 16,
        backgroundColor: "#EDF7FA",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 600 }}>
          Recent Posts
        </Typography>
        <Button sx={{ textTransform: "none" }}>View all</Button>
      </Box>

      <Box>
        {/* Left Card  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Card sx={{ py: 3, px: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Making a webiste from scratch.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontSize: "14px",
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                12 Feb 2020 | Design Pattern
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Crafting seamless web experiences with code and creativity. I
                build responsive, real-world interfaces using React, Vite, and
                modern UI logic—designed for impact and scalability.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ py: 3, px: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Making a webiste from scratch.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontSize: "14px",
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                12 Feb 2020 | Design Pattern
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Crafting seamless web experiences with code and creativity. I
                build responsive, real-world interfaces using React, Vite, and
                modern UI logic—designed for impact and scalability.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  </>
));

export default Posts;
