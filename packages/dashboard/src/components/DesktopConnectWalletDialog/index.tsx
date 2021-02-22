import { memo } from 'react'
import { DesktopConnectActionList, DesktopConnectActionListItem } from '../DesktopConnectActionList'
import { PolkaDotIcon, WalletConnectIcon, MetaMaskIcon } from '@dimensiondev/icons'

export enum ConnectWalletTargets {
    MetaMask,
    Connect,
    PolkaDot,
}
export interface DesktopConnectWalletListProps {
    onConnect(target: ConnectWalletTargets): void
}
export const DesktopConnectWalletList = memo(({ onConnect }: DesktopConnectWalletListProps) => {
    return (
        <DesktopConnectActionList>
            <DesktopConnectActionListItem
                title="MetaMask"
                icon={<MetaMaskIcon fontSize="inherit" />}
                onClick={() => onConnect(ConnectWalletTargets.MetaMask)}
            />
            <DesktopConnectActionListItem
                title="Connect Wallet"
                icon={<WalletConnectIcon fontSize="inherit" />}
                onClick={() => onConnect(ConnectWalletTargets.Connect)}
            />
            <DesktopConnectActionListItem
                title="PolkaDot Wallet"
                icon={<PolkaDotIcon fontSize="inherit" />}
                onClick={() => onConnect(ConnectWalletTargets.PolkaDot)}
            />
        </DesktopConnectActionList>
    )
})
