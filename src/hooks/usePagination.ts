import { useState } from "react"

const defaultValues = {
    page: 0,
    offset: 0,
    limit: 30
}

interface usePaginationParams {
    defaultIncrementValue: number
}

export const usePagination = ({ defaultIncrementValue }: usePaginationParams) => {
    const [values, setValues] = useState({
        page: defaultValues.page,
        offset: defaultValues.offset,
        limit: defaultValues.limit
    })

    const nextPage = () => {
        setValues((state) => {
            return {
                limit: state.limit + defaultIncrementValue,
                offset: state.offset + defaultIncrementValue,
                page: state.page + 1
            }
        })

    }

    const resetValues = () => {
        setValues({
            limit: defaultValues.limit,
            offset: defaultValues.offset,
            page: defaultValues.page
        })
    }

    return { page: values.page, offset: values.offset, limit: values.limit, nextPage, resetValues }
}
