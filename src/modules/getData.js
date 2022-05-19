const getData = () => {
    return fetch('https://test-f327a-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData