import axios from 'axios';

const getData = dataUrl => {
    console.log(dataUrl);
    if (localStorage.getItem(dataUrl)) {
        console.log('Class cached');
        let sData = JSON.parse(localStorage.getItem(dataUrl));
        return sData.slice(0, 10);
    } else {
        console.log('Class non cached');
        return axios.get(dataUrl).then(res => {
            let cData = res.data;
            cData.sort(function(a, b) {
                return b.score - a.score;
            });
            localStorage.setItem(dataUrl, JSON.stringify(res.data));
            return cData.slice(0, 10);
        });
    }
};

export default getData;
