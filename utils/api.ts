const createURL = (path) => window.location.origin + path

export const newEntry = async () => {
    const res = await fetch(
        new Request(createURL('/api/entry'), {
            method: 'POST',
            body: JSON.stringify({ imgAltText: 'new entry!' }),
        })
    )

    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Something went wrong on API server!')
    }
}
