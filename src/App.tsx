import "./App.css";
import { AuthContext, AuthRouteComponent } from "./core";
import { Routes, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage, Home, Landing } from "./pages/index";
import { Navbar } from "./component";
import { useContext } from "react";
import { Toaster } from "sonner";
import { Role } from "./utils/types";

function App() {
  const { userInfo } = useContext(AuthContext);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route index path="/landing" element={<Landing />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          element={
            <AuthRouteComponent
              isAllowed={userInfo && userInfo.username !== ""}
            />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="list" element={<ListPage />} />
        </Route>
        <Route
          element={
            <AuthRouteComponent
              isAllowed={
                userInfo &&
                userInfo.username !== "" &&
                userInfo.role === Role.ADMIN
              }
            />
          }
        >
          <Route path="detail" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Toaster richColors position="bottom-right" />
    </main>
  );
}

export default App;
