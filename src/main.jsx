import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes/index.jsx";
import { LanguageProvider } from "./contexts/LanguageProvider.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </LanguageProvider>
  </QueryClientProvider>
);
