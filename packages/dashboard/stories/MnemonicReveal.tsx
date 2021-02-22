import { story } from '@dimensiondev/maskbook-storybook-shared'
import { DesktopMnemonicReveal as C } from '../src/components/DesktopMnemonic'

const { meta, of } = story(C)

export default meta({
    title: 'Components/DesktopMnemonic Reveal',
})

export const MnemonicReveal = of({
    args: {
        words: [...Array(12).keys()].map((i) => String('word' + i)),
    },
})
