import { story } from '@dimensiondev/maskbook-storybook-shared'
import { DesktopStartupActionList as C, DesktopStartupActionListItem } from '../src/components/DesktopStartupActionList'
import { CloudUpload, CloudDownload, Restore } from '@material-ui/icons'
const { meta, of } = story(C)

export default meta({ title: 'Components/Startup Action List' })
export const StartupActionList = of({
    children: (
        <>
            <DesktopStartupActionListItem
                icon={<CloudUpload />}
                title="Creating a new account"
                description="Local storage of accounts and data"
                action="Sign Up"
                onClick={() => {}}
            />
            <DesktopStartupActionListItem
                icon={<CloudDownload />}
                title="Sign in to your account"
                description="Support only for your local account."
                color="secondary"
                action="Sign in"
                onClick={() => {}}
            />
            <DesktopStartupActionListItem
                icon={<Restore />}
                title="Restore from backups"
                description="Restoring from historical backups. And very very very very very very very very very long text."
                color="secondary"
                action="Recovery"
                onClick={() => {}}
            />
        </>
    ),
})
