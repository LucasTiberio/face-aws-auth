import { useMemo } from "react";

const useQueryParams = <T>(): T => {
    const { search } = window.location;

    return useMemo(() => {
        if (!search) return {};

        return search.substring(1).split("&").reduce((acc, current) => {
            const [key, value] = current.split('=')
            return {
                ...acc,
                [key]: value
            }
        }, {})
    }, [search]) as T;
}

export default useQueryParams