export const useLocalStorage = (key : string ) => {
    const setLocal= (value: unknown) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    };
    return {setLocal};
}