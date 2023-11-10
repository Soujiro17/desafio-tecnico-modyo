import { axiosPublic } from "../services";

export async function getCards() {
  const { data } = await axiosPublic.get(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20"
  );

  return data;
}
