const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
const button = document.querySelector('button');
const listPara = document.createElement('p');
const ul = document.querySelector('#searchResult');



form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.elements.query.value = '';
})

const fetchSearch = async () => {
    try {
        const searchList = document.createElement('li');
        const listContent = await getResult();
        searchList.innerText = listContent;
    } catch (err) {
        console.log('Error', err);
    }
}

const getResult = async () => {
    const searchTerm = input.value;
    const config = { params: { q: searchTerm } };
    const req = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    const newArray = req.data;
    console.log(newArray);
    return newStr = newArray.map(function (str) {
        console.log(str.score, str.show.id, str.show.image);
        const strScore = parseInt(str.score);
        const strID = str.show.id;
        const strName = str.show.name;
        const strIMG = str.show.image.medium;

        const ulList = document.createElement('li');
        ul.append(ulList);
        ulList.classList.add('movieList');

        const liScore = document.createElement('p');
        ulList.append(liScore);
        liScore.innerText = `Score: ${strScore}`;

        const liID = document.createElement('p');
        ulList.append(liID);
        liID.innerText = `ID: ${strID}`;

        const liName = document.createElement('p');
        ulList.append(liName);
        liName.innerText = `Name: ${strName}`;

        const liIMG = document.createElement('img');
        ulList.append(liIMG);
        liIMG.src = strIMG;

    });
}


button.addEventListener('click', fetchSearch)
