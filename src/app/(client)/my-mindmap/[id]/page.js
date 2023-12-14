import { getMindmap } from "@/services/mindmapService";
import Mindmap from "./Mindmap";
import { notFound } from "next/navigation";
import metaImage from "../../images/so-do-tu-duy.jpg";
import { getSession } from "@auth0/nextjs-auth0";
export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const mindmap = await getMindmap(id);

  if (mindmap) {
    return {
      title: mindmap?.seo?.title ? mindmap?.seo?.title : mindmap.name,
      description: mindmap?.seo?.description
        ? mindmap?.seo?.description
        : mindmap.description,
      openGraph: {
        title: mindmap?.seo?.title ? mindmap?.seo?.title : mindmap.name,
        description: mindmap?.seo?.description
          ? mindmap?.seo?.description
          : mindmap.description,
        images: [mindmap?.seo?.image ? mindmap?.seo?.image : process.env.HOST_URL + metaImage.src],
      },
    };
  }
};

const MindmapPage = async ({ params }) => {
  const { id } = params;

  let user = {};
  const session = await getSession();
  if (session) {
    user = session.user;
  }

  const response = await fetch(
    `${process.env.HOST_URL}/api/mindmap?id=${id}&auth=false`,
  );
  const { data: mindmap } = await response.json();
  // const mindmap = await getMindmap(id);
  if (!mindmap) {
    notFound();
  }

  if (mindmap.mode === "private" || !mindmap.mode) {
    if (mindmap.userId !== user.sub) {
      notFound();
    }
  }

  // console.log(mindmap);

  return <Mindmap mindmap={mindmap} editable={mindmap.userId === user.sub} />;
};

export default MindmapPage;
