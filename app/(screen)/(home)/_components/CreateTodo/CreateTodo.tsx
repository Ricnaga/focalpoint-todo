import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";
import { Typography } from "@/app/components/Typography/Typography";
import { ChangeEvent, useState } from "react";
import styles from "./createtodo.module.scss";

type CreateTodoProps = {
  onClose: () => void;
  onAddTodo: (taskName: string) => void;
};

export function CreateTodo(props: CreateTodoProps) {
  const { onClose, onAddTodo } = props;
  const [value, setValue] = useState<string>("");

  const isDisabled = !value;

  const handleNewTaskValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleClose = () => {
    setValue("");
    onClose();
  };

  const handleAddNewTask = () => {
    onAddTodo(value);
    handleClose();
  };

  return (
    <div className={styles.createtodo__container}>
      <Typography size="large">Nova Tarefa</Typography>
      <Input
        title="Título"
        placeholder="Digite"
        value={value}
        onChange={handleNewTaskValue}
      />
      <div className={styles.createtodo__buttons}>
        <Button variant="tertiary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button disabled={isDisabled} onClick={handleAddNewTask}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}
