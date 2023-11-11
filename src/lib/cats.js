import { axiosPublic } from "../services";

export async function getRandomCat() {
  const { data } = await axiosPublic.get("https://cataas.com/cat/gif");

  return data;
}
