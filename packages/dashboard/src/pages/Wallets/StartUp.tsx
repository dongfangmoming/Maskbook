import { experimentalStyled as styled } from '@material-ui/core/styles'
import { DesktopStartupActionList, DesktopStartupActionListItem } from '../../components/DesktopStartupActionList'
import { MaskWalletIcon, ImportWalletIcon, CloudLinkIcon } from '@dimensiondev/icons'

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export function StartUp() {
    return (
        <Container>
            <DesktopStartupActionList>
                <DesktopStartupActionListItem
                    icon={<MaskWalletIcon />}
                    title="Create A New Wallet"
                    description="Mask network supports Eth and Polka networks "
                    action="create"
                    onClick={() => {}}
                />
                <DesktopStartupActionListItem
                    icon={<ImportWalletIcon />}
                    title="Import the ETH or Polka wallet"
                    description="Mask network supports Private Key、JSON.File and Mnemonic words."
                    action="Import"
                    onClick={() => {}}
                />
                <DesktopStartupActionListItem
                    icon={<CloudLinkIcon />}
                    title="Connect plug-in Wallet"
                    description="Mask network supports Metamask、Connect Wallet"
                    action="Connect"
                    onClick={() => {}}
                />
            </DesktopStartupActionList>
        </Container>
    )
}
