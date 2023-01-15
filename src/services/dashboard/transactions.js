import mockedData from './mocks.json';

const TRANSACTIONS_CACHED_KEY = 'transactions-c';

const localStorage = window.localStorage;

const handleTransactionErrors = (response) => {
    if (!response.ok) {
        return mockedData;
    }

    return response;
};

const optimizeFetchedData = (data) => {
    localStorage.setItem(TRANSACTIONS_CACHED_KEY, JSON.stringify(data));

    return data;
};

export const getTransactions = () => {
    const cachedData = localStorage.getItem(TRANSACTIONS_CACHED_KEY);

    if (cachedData) {
        return cachedData;
    }

    return fetch('https://api.npoint.io/38edf0c5f3eb9ac768bd', {
        method: 'GET',
    })
        .then(handleTransactionErrors)
        .then((res) => res.json())
        .then((data) => optimizeFetchedData(data))
        .catch((error) => {
            window.alert(error);
        });
};
