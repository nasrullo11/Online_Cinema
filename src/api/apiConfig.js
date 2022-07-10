const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8351556b22217093845183e55841eaa7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;