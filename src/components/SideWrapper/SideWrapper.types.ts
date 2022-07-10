export type iGridContainer = {
    firstColumnWidth?: string;
}

export type PropTypes = iGridContainer & {
    children: React.ReactNode | React.ReactNodeArray;
    LeftComponent: React.ReactNode | React.ReactNodeArray;
}