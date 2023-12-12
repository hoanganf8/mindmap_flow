"use client";
import { useEffect, useState } from "react";
import ConfirmAlert from "./ConfirmAlert";
import { useRouter } from "next/navigation";
const DeleteButton = ({ id }) => {
  const [show, setShow] = useState(false);
  const [isConfirmed, setConfirm] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isConfirmed) {
      router.replace(`/my-mindmap/delete/${id}`);
      setShow(false);
    }
  }, [isConfirmed, id, router]);
  return (
    <>
      <span
        className="text-gray-600 text-sm px-2"
        onClick={() => {
          setShow(true);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
      {show && <ConfirmAlert setShow={setShow} setConfirm={setConfirm} />}
    </>
  );
};

export default DeleteButton;
