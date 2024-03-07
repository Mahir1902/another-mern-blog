import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";

const Layout = () => {
  return (
    <div className="min-h-[100vh] bg-primaryBg text-textColor ">
      <div className="max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1536px] mx-auto md:px-[5rem] px-[2.5rem]">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cat=Health", element: <CategoryPage category="health" /> },
      { path: "post/:title", element: <SinglePost /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/write", element: <Write /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
