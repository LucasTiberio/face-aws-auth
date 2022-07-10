import React from 'react';

import { FlexContainer } from './FlexGroup.styles';
import type { PropTypes } from './FlexGroup.types';

const FlexGroup: React.FC<PropTypes> = ({
    gap,
    children
}) => {
    return (
        <FlexContainer gap={gap}>
            {children}
        </FlexContainer>
    )
}

export default FlexGroup