import styled, { css } from 'styled-components'

import { iGridContainer } from './SideWrapper.types'

export const GridContainer = styled.section<iGridContainer>`
    display: flex;
    
    > div:nth-child(1) {
        width: ${({ firstColumnWidth }) => firstColumnWidth};
    }
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        
        > div:nth-child(1) {
            width: auto;
            height: 30%;
        }

        > div:nth-child(2) {
            flex-grow: 1;
        }
    }

    background: #fd3c23;
    height: 100%;
`

const WrapperCommonCss = css`
    display: flex;
`

export const LeftWrapper = styled.div`
    ${WrapperCommonCss};
    margin: auto;

    @media screen and (min-width: 768px) {
        justify-content: center;
    }
`

export const RightWrapper = styled.div`
    ${WrapperCommonCss};
    
    padding: 32px;
    border-radius: 8px;

    -webkit-box-shadow: -8px -3px 4px 2px #000000; 
    box-shadow: -8px -3px 4px 2px #000000;

    @media screen and (min-width: 768px) {
        margin: auto 32px;

        flex-grow: 1;
        
        -webkit-box-shadow: -3px 5px 4px 2px #000000; 
        box-shadow: -3px 5px 4px 2px #000000;
    }

    background: white;
`
