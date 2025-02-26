import { Box, Container, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WalletIcon from '@mui/icons-material/Wallet';
import DiscountIcon from '@mui/icons-material/Discount';


const info = [
    {
        to: '/account',
        logo: <PersonIcon />,
        title: 'Profile',
        description: 'Change your profile details'
    },
    {
        to: '/order',
        logo: <MoveToInboxIcon />,
        title: 'Orders',
        description: 'Check your order status'

    },
    {
        to: '/whishlist',
        logo: <FavoriteIcon />,
        title: 'Wishlist'
    },
    {
        to: '/address',
        logo: <AddLocationIcon />,
        title: 'Addresses',
        description: 'Save addresses for a hassle-free checkout'
    },
    {
        to: '/',
        logo: <WalletIcon />,
        title: 'Wallets/BNPL',
        description: 'View you saved Wallets and BNPL'
    },
    {
        to: '/',
        logo: <LogoutIcon />,
        title: 'Logout'
    }
]
function Overview() {
    // <Box>
    //     <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>

    // </Box>
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>
                <Grid container sx={{ alignItems: 'center' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ backgroundColor: "white", marginRight: '40px', padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>


                            <Link to={'/overview'}><li style={{ color: '#AA7B49', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><RemoveRedEyeIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /> <Typography sx={{ fontSize: "20px", fontWeight: '600' }}> Overview</Typography></li></Link>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>
                                <Link to={'/order'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><ShoppingCartIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Orders</Typography></li></Link>

                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Address</Typography>
                                <Link to={'/address'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><LocationOnIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Addresses</Typography></li></Link>

                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Wishlist</Typography>

                                <Link to={'/whishlist'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><FavoriteIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Wishlist</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Discount</Typography>
                                <Link to={'/coupon'}>   <li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}>Coupon</Typography></li></Link>

                            </Box>

                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out</Typography></li></Link>
                        </ul>
                    </Grid>

                    <Grid item md={8} xs={12} sx={{ display: 'flex', flexWrap: "wrap" }}>
                        {
                            info.map((item, index) => {
                                return (

                                    <Grid item md={4} >
                                        <Link to={item.to}>
                                            <Box sx={{
                                                margin: {md:'50px 25px 25px 25px',xs:"50px 70px"}, bgcolor: '#fff', boxShadow: "1px 1px 2px black", transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: '2px 2px 12px rgba(0,0,0,0.2)', backgroundColor: '#E5E5E5' }, borderRadius: '13px', height: "220px", padding: '20px', width: '220px', border: "1px solid #6D6861", textAlign: "center", alignItems: 'center', justifyContent: 'center'
                                            }}>
                                                <Box sx={{ fontSize: '35px', marginTop: "45px" }}>
                                                    {item.logo}
                                                </Box>

                                                <Typography>{item.title}</Typography>
                                                <Typography sx={{ fontSize: '11px' }}>{item.description}</Typography>
                                            </Box>
                                        </Link>
                                    </Grid>

                                )
                            })
                        }
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default Overview;
