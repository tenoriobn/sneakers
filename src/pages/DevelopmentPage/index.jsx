import styled from "styled-components";
import { Link } from 'react-router-dom'
import theme from '@/theme';
import IconNotFound from "./notfound.svg?react";
import IconPrevious from '../../../public/icon/icon-previous.svg?react'

const StylizedContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80vh;

  padding: 0 1rem;

  width: 100%;

  @media (min-width: 992px) {
    height: inherit;
  }
`

const StylizedTitle = styled.h2`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1.5rem;
  font-weight: 700;
  
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`

const StylizedIconNotFound = styled(IconNotFound)`
  max-width: 287px;
  width: 100%;

  path {
    fill: ${theme.colors.orange};
  }

  @media (min-width: 768px) {
    padding: 0;

    max-width: 381px;
  }

  @media (min-width: 992px) {
    max-width: 477px;
  }
`

const StylizedLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: .25rem;

  color: ${theme.colors.orange};
  font-size: 1rem;
  text-decoration: none;

  margin-top: 2rem;

  path {
      stroke: ${theme.colors.orange};
  }
  
  &:hover {
    color: ${theme.colors.veryDarkBlue};

    path {
      stroke: ${theme.colors.veryDarkBlue};
    }
  }
`
const StylizedIconPrevious = styled(IconPrevious)`
  width: 10px;
`

export default function DevelopmentPage() {
  return (
    <StylizedContainer>
      <StylizedIconNotFound />
      <StylizedTitle>Page under development</StylizedTitle>
      <StylizedLink to={'/'}><StylizedIconPrevious /> Back</StylizedLink>
    </StylizedContainer>
  )
}
