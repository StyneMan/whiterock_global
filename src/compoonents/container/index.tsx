import * as React from "react";
import { Container, styled } from "@mui/material";

export interface ContainerChildren {
  children: React.ReactNode;
}

const MContainer = styled(Container)<ContainerChildren>(({ theme }) => ({
  width: "84%",
  disableGutters: true
}));

export default function CustomContainer(children: ContainerChildren): any {
  return <MContainer maxWidth={false}  disableGutters {...children}></MContainer>;
}
