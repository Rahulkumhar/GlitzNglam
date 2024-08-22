// Footer.js
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#15333D",
    color: "#f4e9e0",
    padding: "20px 0",
  };

  const footerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const footerSectionStyle = {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
    fontSize: "20px",
  };

  const footerSectionTitleStyle = {
    marginBottom: "6px",
    fontSize: "1.0em",
  };

  const footerLinkStyle = {
    margin: "2px 0",
    color: "#bbb",
    textDecoration: "none",
  };

  const footerBottomStyle = {
    textAlign: "center",
    paddingTop: "8px",
    borderTop: "1px solid #444",
    marginTop: "20px",
    fontSize: "20px",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>About Us</h4>
          <p sx={{ fontSize: "0.4em" }}>
            Among the best jewellers in India,Glitz & Glam stands out as one of
            the most unique jewellery houses to have their flagship jewellery
            showroom that caters to this exact same thing.
          </p>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Contact</h4>
          <p>Email: GlitzNGlam@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Follow Us</h4>
          <a href="https://facebook.com" style={footerLinkStyle}>
            <FacebookIcon />
          </a>
          <a href="https://twitter.com" style={footerLinkStyle}>
            <XIcon />
          </a>
          <a href="https://instagram.com" style={footerLinkStyle}>
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>&copy; 2024 Glitz & Glam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
