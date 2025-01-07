import globalApi from "./globalApi";

export const customFetch = async (
    paramUrl: string,
    params?: Record<string, unknown>
) => {
    const response = await fetch(`${globalApi()}/${paramUrl}`, {
      method: params ? 'POST' : 'GET',
      headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
 
      return await response.json();
    
};
