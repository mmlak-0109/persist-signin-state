import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from './features/authedUser/authedUserSlice';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    alignItems: 'center',
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.authedUser.value)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signOut());
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <span>
            {user} is signed in.
          </span>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Out
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Home;