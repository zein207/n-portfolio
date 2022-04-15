import { ThemeSetter } from "./components/ui/ThemeSetter";
import ThemeProvider from "./contexts/ThemeProvider";

function PortfolioApp() {
  return (

    <ThemeProvider>
      <div className="main-content">
        <h1>
          David Ponce
          <br/>
          <span className="c-primary">Frontend</span> Developer<span className="c-primary">.</span>
        </h1>
        <ThemeSetter />
      </div>
    </ThemeProvider>
  );
}

export default PortfolioApp;