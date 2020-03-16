import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import CustomPaper from '../../../../components/CustomPaper';
import CustomButton from '../../../../components/CustomButton';
import Box from '@material-ui/core/Box';

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
}));

const rowsPerPage = 2;

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
          <Box>
          {/* <ContactListBar 
            numOfSelectedItems={selectedIds.length} 
            deleteSelectedItems={() => handleContactsDelete(selectedIds)}
          /> */}
          {/* <Table size="small">
            <CustomTableHead 
              isSelected={(selectedIds.length === contacts.length) && selectedIds.length > 0}
              onChange={selectAll}
            />
            <TableBody> */}
              { notes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(note => (
                <React.Fragment key={note.id}>
                  <h1>{note.noteText}</h1>
                  <CustomButton title="Edit"  onClick={() => startNoteEditing(note.id)}/>
                  <CustomButton title="Delete" onClick={() => deleteNote(note.id)}/>
                </React.Fragment>
              ))}
              {/* {emptyRows > 0 && (
              <TableRow style={{ height: (61) * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            </TableBody>
          </Table> */}
          <TablePagination
            component="div"
            count={notes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            rowsPerPageOptions={[rowsPerPage]}
            onChangePage={handleChangePage}
          />
          </Box>
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
