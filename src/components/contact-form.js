import React from 'react'
import styled from 'styled-components'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints'
import DisplayFields from 'react-form-with-constraints/lib/DisplayFields'
import {
  Button,
  Input,
  Text,
  Textarea
} from 'rebass'

const Label = styled.label`
  padding: 1rem;
`

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      disabled: true,
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    let form = FormWithConstraints
    this.setState({ email: e.target.value })
    this.form.validateFields(e.currentTarget)
    this.setState({ disabled: !this.form.isValid()})
  }

  handleMessageChange (e: React.ChangeEvent<HTMLInputElement>) {
    let form = FormWithConstraints
    this.setState({ message: e.target.value })
  }

  handleSubmit (e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
    const email = this.state.email
    const message = this.state.message
    this.setState({
      email: '',
      disabled: true,
      message: ''
    })
  }

  render () {
    return (
      <FormWithConstraints
        ref={(formWithConstraints: any) => this.form = formWithConstraints}
        noValidate
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
     >
        <input
          type='hidden'
          name='form-name'
          value='contact'
        />
        <Label htmlFor='email'>Email:</Label>
        <Input
          bg='white'
          className='required email'
          color='black'
          id='email'
          my={2}
          name='email'
          onChange={this.handleChange}
          p={2}
          placeholder='your favourite email'
          required
          type='email'
          value={this.state.email}
        />
        <Label htmlFor="text">Your message:</Label>
        <Textarea
          bg='white'
          className='required text'
          color='black'
          id='text'
          my={2}
          name='text'
          onChange={this.handleMessageChange}
          p={2}
          placeholder='your message'
          required
          rows={8}
          type='text'
          value={this.state.message}
        />
        <Button
          bg={'base'}
          children='SEND YOUR MESSAGE'
          disabled={this.state.disabled}
          fontSize={1}
          mb={1}
          onClick={this.handleSubmit}
        />
        <FieldFeedbacks for='email'>
          <FieldFeedback when='typeMismatch'>
            <Text
              p={2}
              color='red5'
              children='Invalid email address.'
            />
          </FieldFeedback>
        </FieldFeedbacks>
        <Text
          p={2}
          children={this.state.message}
        />
      </FormWithConstraints>
    )
  }
}
export default ContactForm
