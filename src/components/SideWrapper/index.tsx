import React from 'react';

import { GridContainer, LeftWrapper, RightWrapper } from './SideWrapper.styles';
import type { PropTypes } from './SideWrapper.types';

const SideWrapper: React.FC<PropTypes> = ({
    children,
    LeftComponent,
    firstColumnWidth = '50%'
}) => {
    return (
        <GridContainer firstColumnWidth={firstColumnWidth}>
            <LeftWrapper>
                {LeftComponent}
            </LeftWrapper>
            <RightWrapper>
                {children}
            </RightWrapper>
        </GridContainer>
    );
}

export default SideWrapper;
