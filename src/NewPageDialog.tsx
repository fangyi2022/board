import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const NewPageDialog = function() {
    return (
        <div>
            <Dialog open={true} onClose={() => {}}>
                <DialogTitle>Create New Page</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a new page, please enter the page name.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}