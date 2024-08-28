import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Index";
import About from "./About";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement : <div>404 error 😫 not found.
        <Link to={'/'}>go back</Link>
    </div>,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/index",
        element: <Index />,
      },{
        path:'/about',
        element : <About/>
      },
      {
        path:'/contact',
        element : <Contact/>
      }
    ],
  },
]);

function Layout() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Layout;
