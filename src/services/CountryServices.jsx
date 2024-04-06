import { useEffect } from "react"

const countryApi = "/countries"

export const PostCountry =  async (countryData) => {
    try {
        const response = await fetch("/api" + countryApi, {
            method: 'POST',
            body: JSON.stringify(countryData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.error('Data: ', data);
        return data;
    } catch (error) {
        alert('There was a problem with the fetch operation: ', error.message);
        console.error('There was a problem with the fetch operation: ', error);
    }
}

export const GetCountries =  async (pageNumber = 0, pageSize = 10) => {
    try {
        const response = await fetch(`/api${countryApi}?page=${pageNumber}&size=${pageSize}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.error('Data: ', data);
        return data;
    } catch (error) {
        alert('There was a problem with the fetch operation: ', error.message);
        console.error('There was a problem with the fetch operation: ', error);
    }
}