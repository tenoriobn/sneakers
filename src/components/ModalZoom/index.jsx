import { useModalZoomContext } from "../../context/ModalZoomContext";
import Slide from "../../components/Slide";
import styled from "styled-components";
import CloseIcon from './icon-close.svg?react';
import theme from '@/theme';

const StylizedDialog = styled.dialog`
  @media (max-width: 991px) {
    display: none;
  }
  
  background-color: #000000b7;
  border: none;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  bottom: 0;

  width: auto;
  height: 100%;

  z-index: 5;

`

const ContainerModal = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
`

const StylizedCloseIcon = styled(CloseIcon)`
  align-self: flex-end;

  cursor: pointer;

  margin-bottom: 1.5rem;

  path {
    fill: ${theme.colors.white};

    &:hover {
      fill: ${theme.colors.orange};
    }
  }
`

export default function ModalZoom() {
  const {selectedPhoto, setSelectedPhoto} = useModalZoomContext();

  return (
    <>
      <StylizedDialog open={!!selectedPhoto}>
        <ContainerModal>
          <StylizedCloseIcon onClick={() => setSelectedPhoto(false)} />
          <Slide slide="ModalZoom" />
        </ContainerModal>
      </StylizedDialog>
    </>
  )
}
