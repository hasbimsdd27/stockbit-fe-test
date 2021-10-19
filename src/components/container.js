import React from "react";
import { useSelector } from "react-redux";
import Modal from "./modal";

export default function Container(props) {
  const modal = useSelector((state) => state.modal);
  return (
    <div className="max-w-screen min-h-screen bg-gray-200 relative">
      {modal.isShow && <Modal />}
      {props.children}
    </div>
  );
}
