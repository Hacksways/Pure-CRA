import { Navigate } from 'react-router-dom'

import { SignIn } from 'components/auth'
import { Typography } from 'components/ui/typography'
import { useLoginMutation, useMeQuery } from 'services/auth/auth.service'
import { LoginArgs } from 'services/auth/auth.types'

export const Login = () => {
  const { isLoading, isError } = useMeQuery()
  const [login] = useLoginMutation()
  const isAuth = !isError
  const loginHandler = (loginData: LoginArgs) => {
    login(loginData)
  }

  if (isLoading) {
    return (
      <Typography variant={'large'} as="h1">
        Loading...
      </Typography>
    )
  }

  if (isAuth) return <Navigate to={'/'} replace={true} />

  return <SignIn onSubmit={loginHandler} />
}
