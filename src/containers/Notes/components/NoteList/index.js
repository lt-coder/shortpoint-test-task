import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import CustomPaper from '../../../../components/CustomPaper';
import CustomTableRow from '../../../../components/CustomTableRow';
import CustomTableHead from '../../../../components/CustomTableHead';
import ContactListBar from '../../../../components/ContactListBar';
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
}));

const rowsPerPage = 6;

const ContactList = ({ contacts, startContactEditing, deleteContacts }) => {
  const classes = useStyles();
  const [selectedIds, selectId] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const selectAll = () => {
    if (contacts.length === selectedIds.length) {
      selectId([]);
    } else {
      const allIds = contacts.map(contact => contact.id);
      selectId(allIds);
    }
  }

  const handleSelect = contactId => {
    if (selectedIds.includes(contactId)) {
      selectId(selectedIds.filter(selectedContactId => selectedContactId !== contactId));
    } else {
      selectedIds.push(contactId)
      selectId([...selectedIds]);
    }
  };

  const handleContactsDelete = (contactIds) => {
    deleteContacts(contactIds);
    selectId(selectedIds.filter(selectedContactId => !contactIds.includes(selectedContactId)));
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, contacts.length - page * rowsPerPage);

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <CustomPaper>
          <Grid className={classes.inputs} container spacing={0}>
            {contacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(contact => (
                <CustomTableRow
                  key={contact.id}
                  note={contact}
                  isSelected={selectedIds.includes(contact.id)}
                  selectionChanged={() => handleSelect(contact.id)}
                  editingButtonClicked={() => startContactEditing(contact.id)}
                  deleteButtonClicked={() => handleContactsDelete([contact.id])}
                />
              ))}
          </Grid>
          <TablePagination
            component="div"
            count={contacts.length}
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
  startContactEditing: PropTypes.func.isRequired,
};

export default ContactList;
