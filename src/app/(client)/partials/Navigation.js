"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  const pathname = usePathname();
  const isActive = (path) => {
    return path === pathname
      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
      : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";
  };
  return (
    <>
      <Link href="/" className={isActive("/")}>
        Trang chủ
      </Link>
      <Link href="/about" className={isActive("/about")}>
        Giới thiệu
      </Link>
      <Link href="/features" className={isActive("/features")}>
        Tính năng
      </Link>
      <Link href="/price" className={isActive("/price")}>
        Bảng giá
      </Link>
      <Link href="/contact" className={isActive("/contact")}>
        Liên hệ
      </Link>
    </>
  );
};

export default Navigation;
