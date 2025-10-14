import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";
import AdminPage from "../pages/Admin/AdminPage.jsx";
import Elections from "../pages/Admin/Election/Elections.jsx";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard.jsx";
import Candidates from "../pages/Admin/Candidates/Candidates.jsx";
import Voters from "../pages/Admin/Voters/Voters.jsx";
import Constituency from "../pages/Admin/Constituency/Constituency.jsx";
import UserPage from "../pages/User/UserPage";
import ResultPageComponent from "../pages/Result/ResultPageComponent";
import ResultPage from "../pages/Admin/Results/Result";
import Landing from "../pages/landing/index.jsx";
import About from "../pages/landing/about.jsx";

export const RouterList = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: 'admin',
    element: <AdminPage />,
    children: [
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'election', element: <Elections /> },
      { path: 'candidates', element: <Candidates /> },
      { path: 'voters', element: <Voters /> },
      { path: 'constituency', element: <Constituency /> },
      { path: 'results', element: <ResultPage /> },
    ],
  },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <About /> },
  { path: '/home/user', element: <UserPage /> },
  { path: '/home/result', element: <ResultPage /> },
  { path: '/home/result/:id', element: <ResultPageComponent /> },
]);

// export const RouterList = createBrowserRouter([
//   {path: '', element: <Landing/>}, {
//   path: 'admin', element: <AdminPage/>, children: [{
//       path: 'dashboard', element: <AdminDashboard/>,
//   }, {
//       path: 'election', element: <Elections/>
//   }, {
//       path: 'candidates', element: <Candidates/>
//   }, {
//       path: 'voters', element: <Voters/>
//   }, {
//       path: 'constituency', element: <Constituency/>
//   }, {
//       path: 'results', element: <ResultPage/>
//   },]
// }, {path:'/home',element: <HomePage/>}, {path:'/about',element: <About/>}, {path: 'user', element: <UserPage/>,}, {path: 'result', element: <ResultPage/>}, {
//   path: 'result/:id', element: <ResultPageComponent/>
// },])