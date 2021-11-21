
// Background Color Change project
// const randomColorChange = (color) => {
//     let delay = Math.floor(Math.random() * 4500);
//     console.log(delay);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     });

// }

// randomColorChange('orange')
//     .then(() => randomColorChange('red'))
//     .then(() => randomColorChange('green'))
//     .then(() => randomColorChange('blue'))
//     .then(() => randomColorChange('yellow'))
//     .then(() => randomColorChange('violet'));

// ****************************Returning different result based on the promise result

const movetoNextPage = (url, color) => {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            if (delay < 3000) {
                console.log(delay);
                resolve(`${url} resolved`);
                document.body.style.backgroundColor = color;
            } else {
                console.log(delay);
                reject(`Timeout, ${url} rejected`);
            }
        }, delay)

    });
}

movetoNextPage('time.com', 'grey')
    .then((data) => {
        console.log(data);
        return movetoNextPage('time.com/page2', 'lightblue')
    })
    .then((data) => {
        console.log(data);
        return movetoNextPage('time.com/page3', 'lightgreen')
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });



