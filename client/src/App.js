import ReactLogo from './react-logo.svg';
import StrapiLogo from './strapi-logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appContent}>
        <div className={styles.appLogosWrapper}>
          <img src={ReactLogo} className={styles.reactLogo} alt="React" />
          <img src={StrapiLogo} className={styles.strapiLogo} alt="Strapi" />
        </div>
        <p>
          <a
            className={styles.strapiLink}
            href="https://strapi.io/v4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strapi (v4)
          </a> CMS driven React Application</p>
        <a
          className={styles.appLink}
          href="https://github.com/ahamad-ch/strapi-react-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"<Code />"}
        </a>
      </div>
    </div>
  );
}

export default App;
