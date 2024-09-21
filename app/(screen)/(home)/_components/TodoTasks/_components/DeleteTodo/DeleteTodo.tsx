import { Button } from "@/app/components/Button/Button";
import { Typography } from "@/app/components/Typography/Typography";
import styles from "./deletetodo.module.scss";

type DeleteTodoProps = {
  onClose: () => void;
  onDeleteTodo: () => void;
};

export function DeleteTodo(props: DeleteTodoProps) {
  const { onClose, onDeleteTodo} = props;
  return (
    <div className={styles.deletetodo__container}>
      <Typography size="large">Deletar Tarefa</Typography>
      <Typography weight="regular" color="secondary">
        Tem certeza que você deseja deletar essa tarefa ?
      </Typography>
      <div className={styles.deletetodo__buttons}>
        <Button variant="tertiary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="secondary" onClick={onDeleteTodo}>Deletar</Button>
      </div>
    </div>
  );
}
