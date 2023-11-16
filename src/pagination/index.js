import React, { useState, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { FirstPage, LastPage } from '@material-ui/icons';

const MTablePaginationInner = ({
	classes,
	count,
	page,
	rowsPerPage,
	theme,
	showFirstLastPageButtons,
	onChangePage,
	localization,
}) => {
	const handleFirstPageButtonClick = useCallback(
		event => {
			onChangePage(event, 0);
		},
		[onChangePage]
	);

	const handleBackButtonClick = useCallback(
		event => {
			onChangePage(event, page - 1);
		},
		[onChangePage, page]
	);

	const handleNextButtonClick = useCallback(
		event => {
			onChangePage(event, page + 1);
		},
		[onChangePage, page]
	);

	const handleLastPageButtonClick = useCallback(
		event => {
			onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
		},
		[onChangePage, count, rowsPerPage]
	);

	return (
		<div className={classes.root}>
			{showFirstLastPageButtons && (
				<Tooltip title={localization.firstTooltip}>
					<span>
						<IconButton
							onClick={handleFirstPageButtonClick}
							disabled={page === 0}
							aria-label={localization.firstAriaLabel}>
							<FirstPage />
						</IconButton>
					</span>
				</Tooltip>
			)}
			<Tooltip title={localization.previousTooltip}>
				<span>
					<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label={localization.previousAriaLabel}>
						<FirstPage />
					</IconButton>
				</span>
			</Tooltip>
			<Typography
				variant="caption"
				style={{
					flex: 1,
					textAlign: 'center',
					alignSelf: 'center',
					flexBasis: 'inherit',
				}}>
				{localization.labelDisplayedRows
					.replace('{from}', count === 0 ? 0 : page * rowsPerPage + 1)
					.replace('{to}', Math.min((page + 1) * rowsPerPage, count))
					.replace('{count}', count)}
			</Typography>
			<Tooltip title={localization.nextTooltip}>
				<span>
					<IconButton
						onClick={handleNextButtonClick}
						disabled={page >= Math.ceil(count / rowsPerPage) - 1}
						aria-label={localization.nextAriaLabel}>
						<LastPage />
					</IconButton>
				</span>
			</Tooltip>
			{showFirstLastPageButtons && (
				<Tooltip title={localization.lastTooltip}>
					<span>
						<IconButton
							onClick={handleLastPageButtonClick}
							disabled={page >= Math.ceil(count / rowsPerPage) - 1}
							aria-label={localization.lastAriaLabel}>
							<LastPage />
						</IconButton>
					</span>
				</Tooltip>
			)}
		</div>
	);
};

const actionsStyles = theme => ({
	root: {
		flexShrink: 0,
		color: theme.palette.text.secondary,
		display: 'flex',
		// lineHeight: '48px'
	},
});

MTablePaginationInner.propTypes = {
	onChangePage: PropTypes.func,
	page: PropTypes.number,
	count: PropTypes.number,
	rowsPerPage: PropTypes.number,
	classes: PropTypes.object,
	localization: PropTypes.object,
	theme: PropTypes.any,
	showFirstLastPageButtons: PropTypes.bool,
};

MTablePaginationInner.defaultProps = {
	showFirstLastPageButtons: true,
	localization: {
		firstTooltip: 'First Page',
		previousTooltip: 'Previous Page',
		nextTooltip: 'Next Page',
		lastTooltip: 'Last Page',
		labelDisplayedRows: '{from}-{to} of {count}',
		labelRowsPerPage: 'Rows per page:',
	},
};

const MTablePagination = withStyles(actionsStyles, { withTheme: true })(MTablePaginationInner);

export default MTablePagination;
