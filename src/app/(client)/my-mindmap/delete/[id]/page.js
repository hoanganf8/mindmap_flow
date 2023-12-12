import { deleteMindmap } from "@/services/mindmapService";
import Redirect from "../../create/Redirect";
// import { redirect } from "next/navigation";
const DeletePage = async ({ params }) => {
  const { id } = params;
  const status = await deleteMindmap(id);

  // return redirect(process.env.HOST_URL + "/my-mindmap");
  return <Redirect />;
};

export default DeletePage;
