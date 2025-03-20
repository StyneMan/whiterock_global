import type { BoxProps } from "@mui/material/Box";

import React, { useId, forwardRef } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { logoClasses } from "./classes";
import { Typography } from "@mui/material";
import { RouterLink } from "../router-link";

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      width,
      href = "/",
      height,
      isSingle = true,
      disableLink = false,
      className,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    // const gradientId = useId();

    // const TEXT_PRIMARY = theme.vars.palette.text.primary;
    // const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    // const PRIMARY_MAIN = theme.vars.palette.primary.main;
    // const PRIMARY_DARKER = theme.vars.palette.primary.dark;

    /*
     * OR using local (public folder) */

    const singleLogo = (
      <Box
        alt="Single logo"
        component="img"
        src="/logo.png"
        width="100%"
        height="100%"
      />
    );

    const fullLogo = (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <img alt="" src="/logo.png" width={70} />
        <Typography
          textAlign="center"
          color="black"
          fontWeight={700}
          fontSize={21}
        >
          WhiteRock Global Travels
        </Typography>
      </Box>
    );

 const baseSize = {
      width: width ?? 40,
      height: height ?? 40,
      ...(!isSingle && {
        width: width ?? "90%",
        height: height ?? 48,
      }),
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : "")}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: "inline-flex",
          verticalAlign: "middle",
          ...(disableLink && { pointerEvents: "none" }),
          ...sx,
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
