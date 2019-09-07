import axios from "axios";
import { PRODUCTION_API_ROOT } from "../constants";

export function getAllFrames() {
  return axios.get(`${PRODUCTION_API_ROOT}/frames`);
}
