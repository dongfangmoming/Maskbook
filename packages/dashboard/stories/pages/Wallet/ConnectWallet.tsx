import { story } from '@dimensiondev/maskbook-storybook-shared'
import { DesktopConnectWalletList as C } from '../../../src/components/DesktopConnectWalletDialog'
import { action } from '@storybook/addon-actions'
const { meta, of } = story(C)

export default meta({ title: 'Pages/Wallet/Connect Wallet' })

export const ConnectWallet = of({
    args: { onConnect: action('onConnect') },
})
