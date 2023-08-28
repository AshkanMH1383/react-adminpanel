import * as api from "@/services/Posts"
import { useQuery } from "react-query"

export const useGetPost = () => {
  return useQuery("getPost", api.getPost)
}

