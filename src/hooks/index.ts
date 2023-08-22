import * as api from "@/api"
import { useQuery } from "react-query"

export const useGetPost = () => {
  return useQuery("getPost", api.getPost)
}

