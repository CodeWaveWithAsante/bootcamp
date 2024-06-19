import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Accounts from "./pages/accounts";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import Transactions from "./pages/transactions";

const RootLayout = () => {
  const user = null;
  return !user ? <Navigate to="/login" replace={true} /> : <Outlet />;
};

const App = () => {
  const theme = "light";

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main>
      <div className="w-full min-h-screen px-6 md:px-20 bg-white dark:bg-slate-900">
        <Routes>
          {/* Protected routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Unprotected routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
