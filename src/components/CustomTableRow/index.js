import React from 'react';
import cx from 'classnames'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '150px',
    width: '100%',
    background: 'whitesmoke',
    position: 'relative',
    padding: '0 8px',
    overflow: 'hidden',
    marginBottom: '15px',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  p20: {
    padding: '0 20px 10px 10px',
  },
  fs18: {
    width: '100%',
    fontSize: '18px',
    maxHeight: '25px',
  },
  text: {
    width: '100%',
    maxHeight: '30px',
  },
  divider: {
    width: '-webkit-fill-available'
  },
  red: {
    color: 'red',
  },
  pink: {
    color: 'pink',
  },
  blue: {
    color: 'blue',
  },
  green: {
    color: 'green',
  },
  orange: {
    color: 'orange',
  },
  beforeContent: {
    position: 'absolute',
    left: '0',
    width: '4px',
    height: '100%',
    margin: '0',
    maxHeight: '100%',
  },
  'bg-red': {
    background: 'red',
  },
  'bg-blue': {
    background: 'blue',
  },
  'bg-green': {
    background: 'green',
  },
  'bg-orange': {
    background: 'orange',
  },
  'bg-pink': {
    background: 'pink',
  },
  fr: {
    float: 'right',
  },
  actionBtn: {
    border: 'none',
    borderRadius: '2px',
    margin: '2px',
  }
}));

const CustomTableRow = ({ note, editNote, deleteNote }) => {
  const classes = useStyles();
  return (
    <Grid key={note.id} className={classes.p20} item xs={4}>
      <Paper className={classes.paper} elevation={3}>
        <div className={cx(classes.beforeContent, { [classes[`bg-${note.color}`]]: note.color })}>
        </div>
        <div className={cx(classes.fs18, { [classes[note.color]]: note.color })} color={note.color}>
          Note {note.id}
          <span className={classes.fr}>
            <button className={classes.actionBtn}>
              <EditIcon color="action" onClick={() => editNote()} />
            </button>
            <button className={classes.actionBtn}>
              <DeleteIcon color="action" onClick={() => deleteNote()} />
            </button>
          </span>
        </div>
        <div className={classes.text}>{note.noteText}</div>
        <Divider className={classes.divider} variant='fullWidth' />
        <div className={classes.text}>{note.timeCreated}</div>
        <div >{note.time}</div>
      </Paper>
    </Grid>
  );
}

CustomTableRow.propTypes = {
  note: PropTypes.object.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default CustomTableRow;
