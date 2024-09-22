
import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { jwtDecode } from "jwt-decode";
import { Toaster } from "react-hot-toast"
import { router } from "./routes";




function App() {
  return (
    
      <div className="App bg-[#faf5f2] dark:bg-[#13110c]">
        <RouterProvider router={router} />
        <Toaster position="top-center"  />
      </div>
  );
}

export default App;
