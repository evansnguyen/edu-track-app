// import TextField from '@material-ui/core/TextField'

import {TextField} from "@mui/material";

export const Email: React.FunctionComponent<{ emailIsValid: boolean; setEmail: (_: string) => void }> = ({
                                                                                                             emailIsValid,
                                                                                                             setEmail,
                                                                                                         }) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            label={emailIsValid ? 'Email' : 'Invalid Email'}
            error={!emailIsValid}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                setEmail(evt.target.value)
            }}
        />
    )
}

export const Password: React.FunctionComponent<{
    label: string
    password: string
    passwordIsValid: boolean
    setPassword: (_: string) => void
}> = ({label, password, passwordIsValid, setPassword}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={passwordIsValid ? label : 'Minimum 8 characters'}
            error={!passwordIsValid}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    )
}

export const Username: React.FunctionComponent<{
    usernameIsValid: boolean;
    username: string,
    setUsername: (_: string) => void
}> = ({
          usernameIsValid,
          username,
          setUsername,
      }) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label={usernameIsValid ? 'Username' : 'Minimum 8 characters'}
            error={!usernameIsValid}
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
    )
}

export const Code: React.FunctionComponent<{ codeIsValid: boolean; setCode: (_: string) => void }> = ({
                                                                                                          codeIsValid,
                                                                                                          setCode,
                                                                                                      }) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            label={codeIsValid ? 'Code' : 'Minimum 6 characters'}
            error={!codeIsValid}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                setCode(evt.target.value)
            }}
        />
    )
}
