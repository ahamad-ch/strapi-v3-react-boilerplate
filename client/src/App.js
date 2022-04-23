import ReactLogo from './react-logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <img src={ReactLogo} className="react-logo" alt="logo" />
        <p>Strapi (v4) CMS driven React Application</p>
        <a
          className="app-link"
          href="https://github.com/ahamad-ch/strapi-react-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check code
        </a>
      </div>
    </div>
  );
}

export default App;
