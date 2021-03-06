import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import CustomPaper from '../../../../components/CustomPaper';
import CustomTableRow from '../../../../components/CustomTableRow';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: 'calc(100% - 44px)',
  },
  title: {
    flex: '1 1 100%',
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  empty: {
    height: '175px',
  }
}));

const rowsPerPage = 6;

const NotesList = ({ notes, startNoteEditing, deleteNote }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, notes.length - page * rowsPerPage);
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <CustomPaper>
          <Grid className={classes.inputs} container spacing={0}>
            {
              emptyRows === 6 && <div className={classes.empty}>
                <b> No notes found, please add notes.</b>
              </div>
            }
            {notes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(note => (
                <CustomTableRow
                  key={note.id}
                  note={note}
                  editNote={() => startNoteEditing(note.id)}
                  deleteNote={() => deleteNote([note.id])}
                />
              ))}
          </Grid>
          <TablePagination
            component="div"
            count={notes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            rowsPerPageOptions={[rowsPerPage]}
            onChangePage={handleChangePage}
          />
        </CustomPaper>
      </main>
    </React.Fragment>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
  startNoteEditing: PropTypes.func.isRequired,
};

export default NotesList;
