export default function addApi(form) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/`
        fetch(url, {
            method: 'POST',
            body:form
        }
        
        )
     
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res)
                
            })
            .catch((err) => {
                reject(err)
            })
    })
}