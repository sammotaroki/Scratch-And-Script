const legisProtectionApi = "/legislatureProtections"

export const PostLegislatureProtection =  async (legisProtectionData) => {
    try {
        const response = await fetch("/api" + legisProtectionApi, {
            method: 'POST',
            body: JSON.stringify(legisProtectionData),
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
        alert('There was a problem adding Legislature Protection: ', error.message);
        console.error('There was a problem with the fetch operation: ', error);
    }
}

export const GetLegislatureProtection =  async (pageNumber = 0, pageSize = 10) => {
    try {
        const response = await fetch(`/api${legisProtectionApi}?page=${pageNumber}&size=${pageSize}`, {
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