import { useState } from "react";

const Semaforo = () => {

    const [color, setColor] = useState("red");

  return (
    <div style={{ display: "flex", flexDirection:"Column", justifyContent: "center", alignItems: "center",}}>
      <div role="presentation" style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundColor: color,   
          margin: 25,
        }}
      />

    <div style={{ display: "flex", justifyContent: "center"}}>
    <button onClick={()=>setColor("red")} disabled={color === "red"} style={{ height: 50, margin: 10 }}>Rojo</button>

    <button onClick={()=>setColor("yellow")} disabled={color === "yellow"} style={{ height: 50, margin: 10}}>Amarillo</button>

    <button onClick={()=>setColor("green")} disabled={color === "green"} style={{ height: 50,margin: 10}}>Verde</button>
    </div>

    </div>

  );
}

export default Semaforo