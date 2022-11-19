import { CodeResponse } from "@react-oauth/google";
import axios from "axios";

export type GoogleCodeResponse = Omit<
  CodeResponse,
  "error" | "error_description" | "error_uri"
>;

export async function redeemCode(code: GoogleCodeResponse) {
  try {
    const { data } = await axios.post<{ token: string }>(`/code`, code);

    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new RangeError("Reedem Code nie zadziałął");
  }
}
