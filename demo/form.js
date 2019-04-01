function submitFeedbackForm () { 
  const feedback = document.querySelector('#feedback')
  const email = document.querySelector('#email')
  const name = document.querySelector('#fullname')
  const body = document.querySelector('body')

  // Create a new DOM element of type <section/>
  const sendingSection = document.createElement('section')

  // Add a class to the newly created <section/>
  sendingSection.classList.add('sendingSection')
  body.appendChild(sendingSection)

  sendingSection.innerHTML = `
  You are sending:
  <div>${name.value}</div>
  <div>${email.value}</div>
  <div>${feedback.value}</div>
  `

  // After 4 seconds remove the <section/>
  setTimeout(() => {
    body.removeChild(sendingSection)
  }, 4000)  


  // Reset form value
  name.value = ''
  email.value = ''
  feedback.value = ''

  // return false to prevent default form behaviour 
  return false
}
