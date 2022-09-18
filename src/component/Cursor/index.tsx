// import React from "react"
import Container from "./styles"

// const Cursor = () => {
//   return (
//     <Container>
//       <p>
//         VIEW CASE <br />
//         STUDY
//       </p>
//     </Container>
//   )
// }

// export default Cursor

import React, { useContext } from "react"
import useMousePosition from "../UseMousePosition"
import { MouseContext } from "../MouseContext"
const Cursor = () => {
  const { cursorType } = useContext(MouseContext)
  const { x, y } = useMousePosition()
  return (
    <Container>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        <p>
          VIEW CASE <br /> STUDY
        </p>
      </div>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </Container>
  )
}
export default Cursor
