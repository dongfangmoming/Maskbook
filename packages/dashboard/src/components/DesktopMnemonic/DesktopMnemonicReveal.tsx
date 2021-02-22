import { experimentalStyled as styled, Typography } from '@material-ui/core'

const Container = styled('div')`
    display: inline-grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px 28px;
    & > * {
        min-width: 60px;
        min-height: 28px;
    }
`

const WordCard = styled(Typography)(
    ({ theme }) => `
    border-radius: 6px;
    /* TODO: No hardcoded colors */
    color: #1c68f3;
    font-size: ${theme.typography.caption.fontSize};
    /* TODO: No hardcoded colors */
    background-color: ${theme.palette.background.paper};
    display: flex;
    justify-content: center;
    align-items: center;
`,
)

export interface DesktopMnemonicRevealProps {
    words: string[]
}
// TODO: Select to copy all
export function DesktopMnemonicReveal(props: DesktopMnemonicRevealProps) {
    const { words } = props
    return (
        <Container>
            {words.map((item, index) => (
                <WordCard key={index + item}>{item}</WordCard>
            ))}
        </Container>
    )
}
