import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
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
            <button>Get started</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
