import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./i18n/LanguageProvider";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
