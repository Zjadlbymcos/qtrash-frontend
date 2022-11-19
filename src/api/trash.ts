import axios from "axios";

export type TrashResponse = {
  code: string;
  title: string;
  description: string;
  imageUrl: string
}

export async function getTrash(code: string) {
  try {
    const { data } = await axios.post<TrashResponse>(`/code`, code)

    return data;
  } catch (error: unknown) {
    throw new Error("Nie znaleziono tego śmieci!")
  }
}