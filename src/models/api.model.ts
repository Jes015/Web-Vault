export const ApiFilterParamName = 'f'

export const ApiPaginationNames = {
    offset: 'offset',
    limit: 'limit'
} as const

export const apiRoutes = (() => {

    const baseRoute = '/api/'

    return {
        tools: (filters: string = '', offset: number = 0, limit: number = 0) => {
            let route = `${baseRoute}tools?${ApiPaginationNames.limit}=${limit}&${ApiPaginationNames.offset}=${offset}`

            if (filters !== '') {
                route += `&${ApiFilterParamName}=${filters}`
            }

            return route
        }
    }
})()