import { story } from '@dimensiondev/maskbook-storybook-shared'
import { DesktopCreateWalletForm as C } from '../src/components/DesktopCreateWalletForm'
import { ETHIcon } from '@dimensiondev/icons'

const { meta, of } = story(C)

export default meta({
    title: 'Components/Create Wallet Form',
})

export const CreateWalletForm = of({
    args: {
        options: [{ label: 'ETH', value: 1, icon: <ETHIcon /> }],
    },
})
