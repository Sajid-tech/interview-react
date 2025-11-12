
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import {Home} from "./app/home/home";
import ErrorBoundry from "./components/error-boundry/error-boundry";
function App() {

  return (
    <>
     
      <Toaster richColors position="top-right" />
  
    <ErrorBoundry>
 <Routes>
 
      <Route path="*" element={<Home />} />
    </Routes>
    </ErrorBoundry>
    </>
  );
}

export default App;
