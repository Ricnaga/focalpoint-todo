import { Typography } from "@/app/components/Typography/Typography";
import { LogoIcon } from "@/app/icons/Logo";
import { TodoList } from "./_components/TodoList/TodoList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <header className={styles.home_header}>
        <LogoIcon />

        <h3 className={styles.home_header__title}>
          Bem-vindo de volta, Marcus
        </h3>

        <div className={styles.home_header__date}>
          <Typography color="secondary">
            Segunda, 01 de dezembro de 2025
          </Typography>
        </div>
      </header>

      <section>
        <TodoList />
      </section>
    </div>
  );
}
