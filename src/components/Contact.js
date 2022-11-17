import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5" style={{width:"50%" , color:"white"}}>
      <h2 className="mb-3">Technical Issue Page</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message" >
            Message
          </label>
          <textarea className="form-control" id="message" required placeholder='write your issue here' rows={7} />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact