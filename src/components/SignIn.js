import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../features/authedUser/authedUserSlice';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.authedUser.value !== "")
  const [user, setUser] = React.useState('');

  if (signedIn) {
    return <Redirect push to='/' />
  }

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signIn(user));
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant='h5'>
          React State Persistance Demo
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
          <Typography variant='caption'>
            *Type in any username you like and press sign in.
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}