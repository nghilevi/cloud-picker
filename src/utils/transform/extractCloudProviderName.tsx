const extractCloudProviderName = (strToMatch: string): string => {
    let regex = /-\s(.*?):/;
    let matched = regex.exec(strToMatch);
    return matched ? matched[1] : ''
}


export { extractCloudProviderName }