import { createContext, useContext, useState } from "react";

const ModalZoomContext = createContext();
ModalZoomContext.displayName = "ModalZoomContext";

export function ModalZoomProvider({ children }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <ModalZoomContext.Provider value={{ selectedPhoto, setSelectedPhoto }}>
      {children}
    </ModalZoomContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModalZoomContext() {
  const { selectedPhoto, setSelectedPhoto } = useContext(ModalZoomContext);

  return {
    selectedPhoto, 
    setSelectedPhoto
  }
}

