import useGetQuery from "./helper/useGetQuery"

const API = {
    aboutus :"/api/terms",
}

export const useGetAboutUs = (params:any={})=>useGetQuery("ABOUTUS" , API.aboutus , params)
