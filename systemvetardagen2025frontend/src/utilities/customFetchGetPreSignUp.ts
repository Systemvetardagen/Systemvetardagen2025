
export const customFetchGetPreSignup = async (
    paramUrl: string,
    params?: Record<string, unknown>
) => {
    const response = await fetch(`https://8kg66hzxe0.execute-api.eu-north-1.amazonaws.com/default/${paramUrl}`, {
        method: params ? 'POST' : 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    return await response.json();

};
