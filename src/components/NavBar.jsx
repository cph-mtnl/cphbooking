import { Link } from "@tanstack/react-router";
import { colorsTuple } from "@mantine/core";
import { Avatar } from '@mantine/core';


export default function NavBar(){

    const navBarStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#efefef",
        paddingRight: "30px",
        fontSize: "20px",
        textDecoration: "none",
        color: "black"
      }
      
      const avatarStyle = {
        paddingRight: "15px",
      }

    return(
        <div style={navBarStyle}>
      <Avatar style={avatarStyle} variant="transparent" radius="xl" size="xl" color="#6eb47e" src="" />

        <Link style={navBarStyle} to="/_layout/booking">Ny booking</Link>
        <Link style={navBarStyle} to="/_layout/myBookings">Mine bookinger</Link>

        <div style={{marginLeft: "auto"}}>
          <Link style={navBarStyle} to="/">Log ud</Link>
        </div>
      </div>
    )
}

