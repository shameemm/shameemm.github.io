function sentIt(){
    console.log('sending');
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    console.log(name,email,message)

    const api_id = 'AKfycbxXCFUystaSlDzfQfWFXPwjhMI8WgFo6XgSzpXDeOCdd6FOMEJ6EfdEUy6Surejb_1xXw'
    const uri = `https://script.google.com/macros/s/${api_id}/exec`
    const encoded_data = encodeURI(JSON.stringify({ name: name, email: email, message: message }))
    const request = `${uri}?data=${encoded_data}`
    fetch(request).then(resp => resp.json()).then(data => console.log(data),{ mode: 'no-cors'})

    
}