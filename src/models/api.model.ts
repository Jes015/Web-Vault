export const ApiFilterParamName = 'f'

export const ApiPaginationNames = {
    offset: 'offset',
    limit: 'limit'
} as const

export const apiRoutes = (() => {

    const baseRoute = '/api/'

    return {
        tools: (filters: string = '', offset: number = 0, limit: number = 0) => `${baseRoute}tools?${ApiFilterParamName}=${filters}&${ApiPaginationNames.limit}=${limit}&${ApiPaginationNames.offset}=${offset}'`
    } as const
})()