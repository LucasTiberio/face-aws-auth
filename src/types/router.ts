export interface iRoute {
    path: string;
    key?: string | number;
    component: any;
    exact: boolean;
    title: string;
    authenticated?: boolean;
}

export interface iRedirect {
    redirect?: boolean;
    from?: string;
    to: string;
}

export interface RouteAndRedirect extends iRoute, iRedirect { }