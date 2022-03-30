import styles from './StartButton.module.css';

export function StartButton({ label, startFunc }) {

  function start(e) {
    e.preventDefault();
    startFunc();
  }

  return (
    <div>
      <button className={styles.cta} onClick={e => start(e)}>
        <span>{label}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"/>
          <polyline points="8 1 12 5 8 9"/>
        </svg>
      </button>
    </div>
  );
}