import { apiRoutes, type ToolArray } from "@/models"
import axios, { type AxiosResponse } from "axios"

export const getToolsService = async (filters: string = '', offset: number = 0, limit: number = 0): Promise<AxiosResponse<ToolArray, any>> => {
    return await axios.get<ToolArray>(apiRoutes.tools(filters, offset, limit))
}