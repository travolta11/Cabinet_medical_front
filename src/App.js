// import { Space } from "antd";
// import "./App.css";
// // import AppFooter from "./Components/AppFooter";
// // import AppHeader from "./Components/AppHeader";
// // import PageContent from "./Components/PageContent";
// // import SideMenu from "./Components/SideMenu";
// import AppComponents from "./Components/AppComponents";
// import Login from "./Pages/Login";

// import { useState } from 'react';
// import { Button, Layout, Menu, theme } from 'antd';
// const { Header, Sider, Content } = Layout;
// function App() {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     // <Login/>
//     <div className="App">

      
      
//      < AppComponents />
       
//      {/* <Login/> */}


//     </div>
//   );
// }
// export default App;


import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./Pages/Login";
import AppRoutes from "./Components/AppRoutes";
import AppComponents from "./Components/AppComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppComponents />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<AppRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
