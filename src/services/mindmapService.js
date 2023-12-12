import { promises as fs } from "fs";
import { getSession } from "@auth0/nextjs-auth0";
export const getMindmapList = async (checkUser = true) => {
  const mindmapDataJson = await fs.readFile(
    process.cwd() + "/data/mindmap.json",
    "utf8",
  );
  let mindmapData = [];
  if (mindmapDataJson) {
    mindmapData = JSON.parse(mindmapDataJson);
  }
  if (checkUser) {
    const { user } = await getSession();
    const userId = user.sub;
    mindmapData = mindmapData.filter((item) => item.userId === userId);
  }

  return mindmapData;
};

export const deleteMindmap = async (id) => {
  let mindmapData = await getMindmapList();
  mindmapData = mindmapData.filter((item) => item.id !== id);

  await fs.writeFile(
    process.cwd() + "/data/mindmap.json",
    JSON.stringify(mindmapData),
  );
  return true;
};

export const getMindmap = async (id, checkUser = true) => {
  const mindmapDataJson = await fs.readFile(
    process.cwd() + "/data/mindmap.json",
    "utf8",
  );

  let mindmapData = [];
  if (mindmapDataJson) {
    mindmapData = JSON.parse(mindmapDataJson);
  }
  if (checkUser) {
    const session = await getSession();
    if (session) {
      const { user } = session;
      const userId = user.sub;
      return mindmapData.find(
        (item) => id === item.id && userId === item.userId,
      );
    }
  }

  return mindmapData.find((item) => id === item.id);
};

export const saveMindmap = async (id, data = {}) => {
  let mindmapData = await getMindmapList(false);

  mindmapData = mindmapData.map((item) => {
    if (item.id === id) {
      item.name = data.name;
      item.description = data.description;
      item.map = data.map;
      if (data.mode) {
        item.mode = data.mode;
      }
      if (data.seo) {
        item.seo = data.seo;
      }
    }
    return item;
  });

  await fs.writeFile(
    process.cwd() + "/data/mindmap.json",
    JSON.stringify(mindmapData),
  );
  return true;
};
