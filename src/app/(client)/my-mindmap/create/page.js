import { v4 as uuid } from "uuid";
import moment from "moment/moment";
import { promises as fs } from "fs";
import Redirect from "./Redirect";
import { cookies } from "next/headers";
import { getSession } from "@auth0/nextjs-auth0";

const CreatePage = async () => {
  const id = uuid();
  const createdAt = moment().format();
  const name = "Mindmap không có tên";
  const { user } = await getSession();
  const userId = user.sub;

  if (!userId) {
    return <h3>Error</h3>;
  }
  const mindmapDataJson = await fs.readFile(
    process.cwd() + "/data/mindmap.json",
    "utf8",
  );
  let mindmapData = [];
  if (mindmapDataJson) {
    mindmapData = JSON.parse(mindmapDataJson);
  }

  mindmapData.push({ id, name, userId, createdAt });

  await fs.writeFile(
    process.cwd() + "/data/mindmap.json",
    JSON.stringify(mindmapData),
  );

  return <Redirect id={id} />;
};

export default CreatePage;
