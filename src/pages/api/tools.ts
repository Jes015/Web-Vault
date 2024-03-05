import { ApiFilterParamName, ApiPaginationNames, type ToolArray } from "@/models"
import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

export const prerender = false

export const GET: APIRoute = async ({ url }) => {

  const filtersSelected = (url.searchParams.get(ApiFilterParamName) as string)?.split(',')
  const offset = Number(url.searchParams.get(ApiPaginationNames.offset)) || 0
  const limit = Number(url.searchParams.get(ApiPaginationNames.limit)) || 20

  let tools: ToolArray = []

  const data = (await getCollection('tools')).forEach((collectionYear) => {
    tools = [...tools, ...collectionYear.data]
  })

  if (filtersSelected == null) {
    return sendResponse(tools, offset, limit)
  }


  const dataFiltered = tools.filter(tool => filtersSelected.every(filterSelected => tool.filters.includes(filterSelected)))

  return sendResponse(dataFiltered, offset, limit)
}

const sendResponse = (array: ToolArray, offset: number, limit: number) => {
  return new Response(
    JSON.stringify(array.slice(offset, limit))
  )
}