import { story } from '@dimensiondev/maskbook-storybook-shared'
import { DesktopAlert as C } from '../src/components/DesktopMaskAlert'

const { meta, of } = story(C)

export default meta({
    title: 'Components/Mask Alert',
})

export const MaskAlert = of({})
