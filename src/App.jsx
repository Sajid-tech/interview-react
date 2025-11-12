
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import {Home} from "./app/home/home";
function App() {

  return (
    <>
     
      <Toaster richColors position="top-right" />
  
    
 <Routes>
 
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
