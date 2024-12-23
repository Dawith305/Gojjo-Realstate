const apiBaseUrl = '';

async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem('accessToken') || ''; // Or another storage mechanism

    const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `token ${token}` }),
    };

    const config = {
        ...options,
        headers: {
            ...headers,
            ...options.headers, // Merge additional headers
        },
    };

    const response = await fetch(`${apiBaseUrl}${endpoint}`, config);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${error}`);
    }

    return response.json();
}

export default apiRequest;