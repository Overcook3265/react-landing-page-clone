import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="img/logo.png"
        alt="Logo of sunnyside, a rising sun over green text"
      />
      <nav>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <button className={styles.getstarted}>Get started</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
