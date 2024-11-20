import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { colorsTuple } from "@mantine/core";
import { Avatar } from '@mantine/core';

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

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

function RootRouteWithLayout() {
  return (
    <>
      <div style={navBarStyle}>
      <Avatar style={avatarStyle} variant="transparent" radius="xl" size="xl" color="#6eb47e" src="" />

        <Link style={navBarStyle} to="/booking">Ny booking</Link>
        <Link style={navBarStyle} to="/">Mine bookinger</Link>
        <Link style={navBarStyle} to="/loginStudent">Mine bookinger</Link>

        <div style={{marginLeft: "auto"}}>
          <Link style={navBarStyle} to="/">Log ud</Link>
        </div>
      </div>
      
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
