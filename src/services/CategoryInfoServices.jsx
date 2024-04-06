const categoryInfoApi = "/categoryInfos"

export const PostCategoryInfo =  async (categoryInfoData) => {
    try {
        const response = await fetch(`/api${categoryInfoApi}`, {
            method: 'POST',
            body: JSON.stringify(categoryInfoData),
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

export const GetCategoryInfos =  async (pageNumber = 0, pageSize = 10) => {
    try {
        const response = await fetch(`/api${categoryInfoApi}?page=${pageNumber}&size=${pageSize}`, {
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

export const GetCategoryInfoByCountryIdAndCategoryId =  async (countryId, categoryId) => {
    try {
        const response = await fetch(`/api${categoryInfoApi}/${countryId}/${categoryId}`, {
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

export const UpdateCategoryInfo =  async (categoryInfoData) => {
    try {
        const response = await fetch(`/api${categoryInfoApi}/${categoryInfoData.id}`, {
            method: 'PUT',
            body: JSON.stringify(categoryInfoData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        alert('There was a problem with the fetch operation: ', error.message);
        console.error('There was a problem with the fetch operation: ', error);
    }
}

export const DeleteCategoryInfos =  async (id) => {
    try {
        const response = await fetch(`/api${categoryInfoApi}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        alert('There was a problem with the fetch operation: ', error.message);
        console.error('There was a problem with the fetch operation: ', error);
    }
}