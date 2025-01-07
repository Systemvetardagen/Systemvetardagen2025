const globalApi = () => {
    let globalApi: string;
    if (import.meta.env.PROD === false) {
        globalApi = 'https://ngt1l9zqd3.execute-api.eu-north-1.amazonaws.com/default';
    } else {
        globalApi = 'https://ngt1l9zqd3.execute-api.eu-north-1.amazonaws.com/default';
    }
    return globalApi;
};

export default globalApi;
