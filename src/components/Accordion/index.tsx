import React, { useEffect, useRef, useState } from 'react';

function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  // const refHeight = useRef()

  // useEffect(() => {
  //   if (refHeight === undefined) return
  //   // setHeightEl(`${refHeight.current.scrollHeight}px`)

  // }, [])

  // const toggleState = () => {
  //   setToggle(!toggle)
  // }

  return <div>Accordion</div>;
}

export default Accordion;
