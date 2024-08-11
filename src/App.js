import React from "react";
import RouteComponent from "./route";
function App() {
  return (
    <div
    style={{ 
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuXRnQ3CpVnxNhQMdK1BBwcNzf39PdPC_Og&usqp=CAU')`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '100vh', 
      width: '100vw', 
    }}
    >
      <RouteComponent />
    </div>
  );
}

export default App;
