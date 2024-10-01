// Import the necessary configurations
import { API_NODE_URL } from '@/configs/config';

// Define the function to fetch data from the API
export default async function fetchApi(endPoint, body) {

    // Construct the full API URL
    const apiUrl = `${API_NODE_URL}${endPoint}`;

    try {
        // Make the API call
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...requestBody }),
        });

        // Check if response is okay
        if (!response.ok) {
            return false;
        }

        // Parse and return the JSON data
        const data = await response.json();
        return data;
    } catch (error) {
        // Log the error and rethrow it for further handling
        console.error('Error fetching API:', error.message);
        throw error;
    }
}
