import React from 'react';

import LoginFlowContextProvider from "../../contexts/login-flow-context";
import HomeIO from ".";

const HomeIoWithContext = () => (
    <LoginFlowContextProvider>
        <HomeIO />
    </LoginFlowContextProvider>
)

export default HomeIoWithContext