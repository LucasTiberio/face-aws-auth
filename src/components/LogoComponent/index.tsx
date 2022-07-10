import { Image } from 'evergreen-ui';
import React from 'react';

import LogoSvg from '../../assets/svg/logo.svg'

const LogoComponent = ({ width = '20rem' }) => {
    return <Image alt="Logo DoDev" width={width} src={LogoSvg} />
}

export default LogoComponent;