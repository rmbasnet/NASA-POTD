const API_KEY = import.meta.env.VITE_API_KEY

export const getData = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data)
    return data;
}
