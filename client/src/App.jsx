import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <Home />
    </main>
  );
}

export default App;
