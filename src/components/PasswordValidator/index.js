// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, SetPassword] = useState('')

  const showMessage = password.length < 8

  const onChangeMessage = event => {
    SetPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validators</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={onChangeMessage} />
        {showMessage && (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
