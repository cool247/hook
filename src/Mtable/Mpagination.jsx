import { IconButton, TablePagination, Tooltip, makeStyles, } from "@material-ui/core";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from "@material-ui/icons";


export const CustomPaginationComponent = (props) => {
  const {
    page,
    rowsPerPage,
    count,
    onChangePage,
    rowsPerPageOptions,
    onChangeRowsPerPage
  } = props;

  console.log(props);


  return (
    <TablePagination
      component="div"
      style={props.style}
      showFirstButton={true}
      showLastButton={true}
      variant="footer"
      size='small'
      // ActionsComponent={<props.ActionsComponent {...props}/>}
      ActionsComponent={TablePaginationActions}
      // classes={{ root:props.classes.root,selectRoot:props.classes.selectRoot}}

      SelectProps={{ native: true }}
      count={count}
      page={page}
      rowsPerPageOptions={rowsPerPageOptions}
      // ActionsComponent={props.ActionsComponent}
      onPageChange={onChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onChangeRowsPerPage}
    />
  );
};

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


function TablePaginationActions(props) {
  const classes = useStyles1();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <Tooltip title="First Page">
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          <FirstPage />
        </IconButton>
      </Tooltip>
      <Tooltip title="First Page">
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      </Tooltip>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </div>
  );
}


