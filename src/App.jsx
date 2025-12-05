
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import Interview from "./app/interview/interview";
function App() {

  return (
    <>
     
      <Toaster richColors position="top-right" />
  
   
 <Routes>
 
      <Route path="/" element={<Interview />} />

    </Routes>
  
    </>
  );
}

export default App;
