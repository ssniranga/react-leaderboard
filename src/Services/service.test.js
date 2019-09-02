const axios = require('axios');

class Students {
    static async all() {
        let res = await axios.get('../data/students-scores.json').then(res => res.data);
        return res;
     }
}

class Classes {
    static async all() {
       let res = await axios.get('../data/class-scores.json').then(resp => resp.data);
       return res;
     }
}
class Schools {
    static async all() {
       let res = await axios.get('../data/school-scores.json').then(resp => resp.data);
       return res;
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
    //axios.get.mockResolvedValue(resp);
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

    const resp = { data : classes };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    Classes.all().then(resp => expect(resp.data).toEqual(classes));
});

test('Should fetch Schools', () => {
    const schools = [{
        "school_name":"Brsibane High",
        "admin_name":"Brandie Mcgee",
        "school_address":"Gold Coast, QLD",
        "score":95608
     }];

    const resp = { data : schools };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    Schools.all().then(resp => expect(resp.data).toEqual(schools));
    
});
