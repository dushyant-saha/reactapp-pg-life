// import logo from './logo.svg';
import './stylesheets/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { RoomSearch } from './pages/RoomSearch';
import { RoomDetails } from './pages/RoomDetails';
import { Dashboard } from './pages/Dashboard';

const routing = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/room-search-delhi', element: <RoomSearch /> },
      { path: '/room-search-mumbai', element: <RoomSearch /> },
      { path: '/room-search-bangalore', element: <RoomSearch /> },
      { path: '/room-search-chennai', element: <RoomSearch /> },
      { path: '/room-details', element: <RoomDetails /> },
      { path: '/dashboard', element: <Dashboard /> }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routing} />
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }