import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../redux/action/modal";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  console.log(modal);
  return (
    <div className="fixed h-full w-full bg-black bg-opacity-60">
      <div className="flex justify-center mt-16">
        <div className="bg-white p-4 rounded-md h-auto">
          <div>{modal.content}</div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-400 text-white p-2 rounded-md"
              onClick={() => dispatch(hideModal())}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
