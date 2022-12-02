import axios from "axios";

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export async function getAllContactsData() {
  return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    return error;
  });
}
