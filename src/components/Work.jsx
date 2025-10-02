import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";

function Work(props, ref) {
  return (
    <>
      <Container
        ref={ref}
        disableGutters
        sx={{
          px: 16,
          py: 6,
          gap: 8,
        }}
      >
        <Typography variant="body1">Featured Work</Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: 4,
              mb: 4,
              borderBottom: "2px solid #ccc",
              py: 2,
            }}
          >
            <Box>
              <img src="/src/assets/Hero-1.png" alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Designing Dashboards
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 2 }}>
                <span
                  style={{
                    backgroundColor: "#21243D",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                >
                  2021
                </span>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: "#21243d" }}>
                Crafting seamless web experiences with code and creativity. I
                build responsive, real-world interfaces using React, Vite, and
                modern UI logic—designed for impact and scalability.
              </Typography>
            </Box>
          </Grid>
          <Divider />
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              gap: 4,
              mb: 4,
              borderBottom: "2px solid #ccc",
              py: 2,
            }}
          >
            <Box>
              <img src="/src/assets/Hero-2.png" alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Designing Dashboards
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 2 }}>
                <span
                  style={{
                    backgroundColor: "#21243D",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                >
                  2021
                </span>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: "#21243d" }}>
                Crafting seamless web experiences with code and creativity. I
                build responsive, real-world interfaces using React, Vite, and
                modern UI logic—designed for impact and scalability.
              </Typography>
            </Box>
          </Grid>
          <Divider />
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              gap: 4,
              borderBottom: "2px solid #ccc",
              py: 2,
            }}
          >
            <Box>
              <img src="/src/assets/Hero-3.png" alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Designing Dashboards
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 2 }}>
                <span
                  style={{
                    backgroundColor: "#21243D",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                >
                  2021
                </span>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: "#21243d" }}>
                Crafting seamless web experiences with code and creativity. I
                build responsive, real-world interfaces using React, Vite, and
                modern UI logic—designed for impact and scalability.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default React.forwardRef(Work);
