import axios from "axios"

const apiSharingData = axios.create({
  baseURL: "http://localhost:3002"
})

export default apiSharingData
