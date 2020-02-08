let whoArr = ['the dog','my grandma','his turtle','my bird'];
let whatArr = ['eat','pissed','crushed','broked'];
let whenArr = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const imgObj = { grandma:'https://i.imgflip.com/1qfymr.jpg',
                 dog:'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg',
                 turtle:'https://www.rhfleet.org/sites/default/files/turtle-odyssey_showpageheader.jpg',
                 bird:'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=590&h=800&756A88D1-C0EA-4C21-92BE0BB43C14B265'};


const click = () => {
const WhoIndex = Math.floor(Math.random()*whoArr.length);
const WhatIndex = Math.floor(Math.random()*whatArr.length);
const WhenIndex = Math.floor(Math.random()*whenArr.length);

    const imgToFind = (words) => {
        const wordArr = words.split(' ');
        const word = () => {
                for( imgName in imgObj) {
                const response = wordArr.find(word => word === imgName);
                if(response){return response} }};
        return word() };

document.getElementById('img').src = imgObj[imgToFind(whoArr[WhoIndex])]
document.getElementById("excuse").innerHTML = `${whoArr[WhoIndex]} ${whatArr[WhatIndex]} my homework ${whenArr[WhenIndex]}`} 
document.getElementById('button').addEventListener("click", click);



