import React from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  selector?: string | undefined;
  children?: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children }) => {
  const rootElement = document.getElementById("#modal-root");

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
