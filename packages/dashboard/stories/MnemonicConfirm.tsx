import { story } from '@dimensiondev/maskbook-storybook-shared'
import { actions } from '@storybook/addon-actions'
import { DesktopMnemonicConfirm as C } from '../src/components/DesktopMnemonic/DesktopMnemonicConfirm'

const { meta, of } = story(C)
export default meta({
    title: 'Components/DesktopMnemonic Confirm',
    argTypes: actions('onChange'),
})
export const MnemonicConfirm = of({
    args: {},
})
