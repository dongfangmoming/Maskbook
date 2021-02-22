import React, { memo, useState } from 'react'
import { Alert, Collapse, IconButton, experimentalStyled as styled } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

export const DesktopAlert = memo(() => {
    const [openAlert, setOpenAlert] = useState(true)

    return (
        <Collapse in={openAlert}>
            <Alert
                severity="info"
                action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpenAlert(false)}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                Mask Network is a free, open-source, client-side interface. Mask Network allows you to interact directly
                with the blockchain, while you remain in full control of your keys and funds.Please think about this
                carefully. YOU are the one who is in control. Mask Network is not a bank or exchange. We don't hold your
                keys, your funds, or your information. This means we can't access accounts, recover keys, reset
                passwords, or reverse transactions.
            </Alert>
        </Collapse>
    )
})
