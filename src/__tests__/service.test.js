const axios = require('axios');

class Students {
    static async all() {
        let res = await axios.get('../data/students-scores.json').then(res => res.data);
        return res;
     }
}

class Classes {
    static async all() {
       let resC = await axios.get('../data/class-scores.json').then(respC => respC.data);
       return resC;
     }
}

class Schools {
    static async all() {
       let resS = await axios.get('../data/school-scores.json').then(respS => respS.data);
       return resS;
     }
}

jest.mock('axios');

test('Should fetch Students', () => {
    const students = [{
        "school_name": "state central",
        "name": "alyce fischer",
        "score": 995,
        "class_name": 3
    }];

    const resp = { data : students };
 
    axios.get.mockImplementation(() => Promise.resolve(resp));

    return Students.all().then(data => expect(data).toEqual(students));

});

test('Should fetch Classes', () => {

    const classes = [ {
        "school_name": "Fort Street High School",
        "teacher_name": "Connie Mcknight",
        "score": 8566,
        "class_name": 1
      }];

    const respC = { data : classes };

    axios.get.mockImplementation(() => Promise.resolve(respC));

    Classes.all().then(resp => expect(respC.data).toEqual(classes));
});

test('Should fetch Schools', () => {
    const schools = [{
        "school_name":"Brsibane High",
        "admin_name":"Brandie Mcgee",
        "school_address":"Gold Coast, QLD",
        "score":95608
     }];

    const respS = { data : schools };

    axios.get.mockImplementation(() => Promise.resolve(respS));

    Schools.all().then(resp => expect(respS.data).toEqual(schools));
    
});
