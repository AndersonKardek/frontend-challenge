"use client";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
`;

export function Container(props: ContainerProps) {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
}
