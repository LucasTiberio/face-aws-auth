import styled from "styled-components";

export type iFlexGroupContainer = {
    gap?: string;
}

export const FlexContainer = styled.div<iFlexGroupContainer>`
    display: flex;
    justify-content: ${({ gap }) => !gap ? 'space-between' : 'auto'};
    align-items: baseline;
    gap: ${({ gap }) => gap};
`