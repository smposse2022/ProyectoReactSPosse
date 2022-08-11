import { useState, useEffect, useRef } from "react";

//Use Ref: const useRef = (initialVal)=> useState ({current: initialVal})[0]

const Animation = () => {
  const [background, setBackground] = useState("green");
  const divRef = useRef();
  const otroRef = useRef("hola");
  console.log(otroRef);
  otroRef.current = "chau";
  /*Elemento que da la posición del elemento es getBoundingClientReact ()
  El hook useRef, se puede guardar un estado, pero al cambiar su estado, no se ejecuta un nuevo Render. Asignarle al current otro valor (cambiarlo de valor) no genera otro Render. Por lo que si ese valor está referenciado a algo visual, no lo voy a ver nunca.
  Revisar el Imperative Handler. SSe puede usar el useRef para contar los Render.*/
  useEffect(() => {
    const handleScroll = () => {
      //const div = document.getElementById("scroll_color");
      //console.log(div.getBoundingClientRect());
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const backgroundColor = y <= 0 ? "blue" : "green";
      setBackground(backgroundColor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        ref={divRef}
        /* id="scroll_color"*/ style={{ height: "160vh", background }}
      >
        <h1 style={{ color: "white" }}>
          Scroller para cambiar el color de fondo
        </h1>
      </div>
    </>
  );
};

export default Animation;
