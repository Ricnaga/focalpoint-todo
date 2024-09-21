"use client";

import { ComponentProps, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

interface ModalProps extends ComponentProps<"dialog"> {
  isOpen: boolean;
}

export function Modal(props: ModalProps) {
  const { isOpen, ...rest } = props;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalRef = ref.current;

    if (modalRef && isOpen) {
      modalRef.showModal();
    }

    return () => {
      modalRef?.close();
    };
  }, [isOpen]);

  return createPortal(
    <dialog ref={ref} className={styles.modal} {...rest} />,
    document.body
  );
}
