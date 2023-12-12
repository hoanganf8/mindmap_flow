import MindMapList from "./MindMapList";
import Link from "next/link";

export const metadata = {
  title: `Mindmap của tôi - ${process.env.APP_NAME}`,
};

export const dynamic = "force-dynamic";

const MyMindMap = async () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-medium my-2">
          Mindmap của tôi
        </h1>
        <div className="py-4">
          <Link
            href="/my-mindmap/create"
            className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
          >
            Thêm mới
          </Link>
        </div>
        <MindMapList />
      </div>
    </div>
  );
};

export default MyMindMap;
