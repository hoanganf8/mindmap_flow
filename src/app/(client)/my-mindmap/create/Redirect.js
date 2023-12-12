"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Redirect = ({ id }) => {
  const router = useRouter();
  let to = "/my-mindmap/" + id;
  if (!id) {
    to = "/my-mindmap";
  }
  useEffect(() => {
    router.replace(to);
    router.refresh();
  });
  return;
};

export default Redirect;
