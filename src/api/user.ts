import { CodeResponse } from "@react-oauth/google";
import axios from "axios";

export type GoogleCodeResponse = Omit<
  CodeResponse,
  "error" | "error_description" | "error_uri"
>;

export async function redeemCode(code: GoogleCodeResponse) {
  try {
    console.log(code);
    const params = new URLSearchParams(code).toString();
    const { data } = await axios.get<any>(`/connect/google/check?${params}`);

    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new RangeError("Reedem Code nie zadziałął");
  }
}
