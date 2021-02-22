import { experimentalStyled as styled } from '@material-ui/core'
import type {} from '@material-ui/system'
/**
 * This component is an abstraction of a list of "start up action suggestions".
 */
export const DesktopStartupActionList = styled('ul')(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    width: 440px;
    & > * {
        margin-bottom: theme.spacing(0.75);
    }
`,
)
export interface DesktopStartupActionListProps extends React.PropsWithChildren<{}> {}
export * from './DesktopStartupActionListItem'
