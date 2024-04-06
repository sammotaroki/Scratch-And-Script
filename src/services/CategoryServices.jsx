const categoryApi = "/categories"

export const PostCategory =  async (categoryData) => {
    try {
        const response = await fetch(`/api${categoryApi}`, {
            method: 'POST',
            body: JSON.stringify(categoryData),
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

export const GetCategories =  async (pageNumber = 0, pageSize = 10) => {
    try {
        const response = await fetch(`/api${categoryApi}?page=${pageNumber}&size=${pageSize}`, {
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