import { useModalZoomContext } from "../../context/ModalZoomContext";

export default function ModalZoom() {
  const {selectedPhoto} = useModalZoomContext();

  return (
    <>
      <dialog open={!!selectedPhoto}>
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
        </form>
      </dialog>
    </>
  )
}
