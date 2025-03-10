import React, { useEffect, useRef } from "react";
import img1 from "../../assets/images/Logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Container,
  MenuItem,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Menu,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import gsap from "gsap";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Animate logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );

    // Animate menu items
    gsap.fromTo(
      menuItemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Animate icons
    gsap.fromTo(
      iconsRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <AppBar
      sx={{
        bgcolor: "#DFCAB1",
        zIndex: 2,
        color: "black",
        boxShadow: "none",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* Logo */}
            <Link to={"/home  "} ref={logoRef}>
              <img
                src={img1}
                alt="Logo"
                style={{ height: "25px", width: "150px" }}
              />
            </Link>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  fontWeight: "700",
                  listStyle: "none",
                  margin: 0,
                  padding: "10px",
                  alignItems: "center",
                }}
              >
                {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
                  <Link to={`/${item.toLowerCase()}`} key={index}>
                    <li
                      ref={(el) => (menuItemsRef.current[index] = el)}
                      className="Marcellus"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 15px",
                      }}
                    >
                      {item}
                    </li>
                  </Link>
                ))}
              </ul>
            </Box>

            {/* Icons */}
            <Box sx={{ flexGrow: 0, display: "flex", textAlign: "center" }}>
              <Button
                onClick={(e) => setAnchorEl(e.currentTarget)}
                aria-controls={anchorEl ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl)}
              >
                <PersonIcon ref={(el) => iconsRef.current.push(el)} sx={{ color: "#6D6861" }} />
              </Button>

              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                sx={{ marginTop: "35px", marginLeft: "-10px" }}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Link to="/register">Sign up</Link>
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Link to="/login">Sign in</Link>
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Link to="/account">My Account</Link>
                </MenuItem>
              </Menu>

              {[ShoppingBagIcon, FavoriteBorderIcon, AddShoppingCartIcon].map(
                (Icon, index) => (
                  <IconButton key={index} sx={{ margin: "0 2px" }}>
                    <Icon ref={(el) => iconsRef.current.push(el)} />
                  </IconButton>
                )
              )}

              {/* Mobile Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={(e) => setAnchorElNav(e.currentTarget)}
                  color="inherit"
                >
                  <MenuIcon ref={(el) => iconsRef.current.push(el)} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={() => setAnchorElNav(null)}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <FormControl>
                    {["Home", "Shop", "Blog", "Contact", "Overview"].map(
                      (item, index) => (
                        <Link to={`/${item.toLowerCase()}`} key={index}>
                          <MenuItem
                            onClick={() => setAnchorElNav(null)}
                            ref={(el) => menuItemsRef.current.push(el)}
                          >
                            {item}
                          </MenuItem>
                        </Link>
                      )
                    )}
                  </FormControl>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
