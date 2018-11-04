const signUp = async ({ name: userName, email: userEmail, password: pwd }) => {
  const data = { userName, userEmail, pwd }
  const formBody = Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  return fetch('https://gitgy-backend.herokuapp.com/user/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return { error }
    })
}

export { signUp }
