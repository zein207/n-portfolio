import ThemeProvider from "./contexts/ThemeProvider";
import { AppRouter } from "./routers/AppRouter";

function PortfolioApp() {
  return (

    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default PortfolioApp;