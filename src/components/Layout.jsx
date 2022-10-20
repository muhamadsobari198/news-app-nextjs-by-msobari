import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import { Box, Grid } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <Box>
    <Navbar />
    <Grid container>
        <Grid item sm={2} xs={2}>
            <Leftbar/>
        </Grid>
        <Grid item sm={10} xs={10} md={8} >
           {children}
        </Grid>
        <Grid item sm={10} xs={10} md={2}>
            Rightbar
        </Grid>
    </Grid>
</Box>
  );
};

export default Layout;
