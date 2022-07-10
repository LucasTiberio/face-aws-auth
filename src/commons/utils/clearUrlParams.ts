export default () => {
    const { history, location } = window

    const currentUrl = location.origin + location.pathname
    history.pushState('', '', currentUrl)
}