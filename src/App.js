import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Connecting from "./pages/Connecting";
import Validate from "./pages/Validate";
import Error from "./pages/Error";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path:'/', element:<Home />},
      {path:'/connect', element:<Connect />},
      {path:'/connect/:id', element:<Connecting />},
      {path:'/synchronizing/:id', element:<Validate />},
      {path:'/error/:id', element:<Error />},
    ]
  }
])

function App() {
  return (
    <div className="App min-h-screen">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
