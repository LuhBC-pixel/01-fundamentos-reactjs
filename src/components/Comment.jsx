import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://avatars.githubusercontent.com/u/64265817?v=4' alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time title='11 de Maio às 8:13h' dateTime='2022-05-11 08:13:30'>
                Cerca de 1h atrás
              </time>
            </div>

            
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>Aplaudir</footer>
      </div>
    </div>
  );
}
