import React from 'react';
import img1 from '../../assets/images/Logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, FormControl, MenuItem, Button, IconButton, AppBar, Toolbar, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(0);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(0);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ bgcolor: '#F7EBDC', zIndex: 2, color: 'black', boxShadow: "none", top: '0' }} position='sticky'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={'/'}>
                        <img src={img1} alt="Logo" style={{ height: '25px', width: "150px" }} />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                        <ul style={{ display: 'flex', fontWeight: '700', listStyle: 'none', margin: 0, padding: '10px', alignItems: "center" }}>
                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>Home <KeyboardArrowDownIcon /></li></Link>
                            <Link to={'/page'}><li style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>Pages <KeyboardArrowDownIcon /></li></Link>
                            <Link to={'/shop'}><li style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>Shop <KeyboardArrowDownIcon /></li></Link>
                            <Link to={'/blog'}><li style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>Blog <KeyboardArrowDownIcon /></li></Link>
                            <Link to={'/blog'}><li style={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>Contact <KeyboardArrowDownIcon /></li></Link>
                        </ul>
                    </Box>

                    <Box sx={{ flexGrow: 0, padding: { md: '0px 5px', xs: '0px 0px' }, display: 'flex' }}>
                        <Button id="demo-positioned-button" aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                            <PersonIcon sx={{ color: '#6D6861', margin: { sm: '0 2px', xs: '0 2px' } }} />
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            sx={{ marginTop: '35px', marginLeft: '-10px' }}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        >
                            <MenuItem onClick={handleClose}><Link to='/register'>Sign up</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/login'>Sign in</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/account'>My Account</Link></MenuItem>
                        </Menu>
                        <IconButton sx={{ margin: { sm: '0 2px', xs: '0 2px' } }}>
                            <ShoppingBagIcon />
                        </IconButton>
                        <IconButton sx={{ margin: { sm: '0 2px', xs: '0 2px' } }}>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton sx={{ margin: { sm: '0 2px', xs: '0 2px' } }}>
                            <AddShoppingCartIcon />
                        </IconButton>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                <FormControl>
                                    <Link to={'/'}><MenuItem onClick={handleCloseNavMenu}>Home <KeyboardArrowDownIcon /></MenuItem></Link>
                                    <Link to={'/pages'}><MenuItem onClick={handleCloseNavMenu}>Page <KeyboardArrowDownIcon /></MenuItem></Link>
                                    <Link to={'/shop'}><MenuItem onClick={handleCloseNavMenu}>Shop <KeyboardArrowDownIcon /></MenuItem></Link>
                                    <Link to={'/blog'}><MenuItem onClick={handleCloseNavMenu}>Blog <KeyboardArrowDownIcon /></MenuItem></Link>
                                    <Link to={'/blog'}><MenuItem onClick={handleCloseNavMenu}>Contact <KeyboardArrowDownIcon /></MenuItem></Link>
                                    <Link to={'/overview'}><MenuItem onClick={handleCloseNavMenu}>Overview <KeyboardArrowDownIcon /></MenuItem></Link>
                                </FormControl>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
