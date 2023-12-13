export default function addApi(data) {
 
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/?id=${data.payload.id}&index=${data.payload.index}`
        fetch(url, {
            method: 'DELETE',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res)
                
            })
            .catch((err) => {
                reject(err)
            })
    })
}