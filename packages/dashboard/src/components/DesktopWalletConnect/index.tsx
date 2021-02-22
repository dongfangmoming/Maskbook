import { memo } from 'react'
import { experimentalStyled as styled, Typography } from '@material-ui/core'
import { DesktopWalletQRCodeContainer } from '../DesktopWalletQRCodeContainer'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tip = styled(Typography)(
    ({ theme }) => `
    text-align: center;
    color: #7b8192;
    font-size: ${theme.typography.body1.fontSize};
    margin-bottom: ${theme.spacing(5)};
`,
)

export const DesktopWalletConnect = memo(() => {
    return (
        <Container>
            <Tip color="textSecondary">Scan QR code with a WalletConnect-compatible wallet</Tip>
            <DesktopWalletQRCodeContainer width={330} height={330} borderWidth={15} borderHeight={2} />
        </Container>
    )
})
