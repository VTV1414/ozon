const getData = () => {
    return fetch(
        `https://test-f327a-default-rtdb.firebaseio.com/goods.json`
        //`https://test-f327a-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    )
        .then((response) => {
            return response.json()
        })
}

export default getData