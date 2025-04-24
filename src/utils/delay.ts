const delay = (ms: number): Promise<void> => {
    if (process.env.NODE_ENV !== 'development') {
        return Promise.resolve()
    }
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
}

export default delay