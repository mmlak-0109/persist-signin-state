import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../features/authedUser/authedUserSlice';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

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
  avatar: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(15),
    height: theme.spacing(15),
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
        <Typography variant='h5' paragraph>
          React State Persistence Demo
        </Typography>
        <Typography align='justify'>
          This is a simple application that demonstrates persisting an applications state.
          Redux is an in-memory solution to state management, but the state will get reset upon a page refresh, closing the tab, duplicating a tab, etc.
          By using the redux-persist package, you can store some or all of an applications state in various more permanent formats (local storage, session storage, etc.)
        </Typography>
        <Avatar className={classes.avatar}>
          <PersonIcon style={{ fontSize: 100 }} />
        </Avatar>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography>
            {user} is signed in.
          </Typography>
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