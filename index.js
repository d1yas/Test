// const jsonfile = require("jsonfile");
// const moment = require('moment');
// const FILE_PATH = './data.json';
// const simpleGit = require("simple-git")
// const random = require('random');
// const makeCommit = n => {
//     if(n===0) return simpleGit().push();
//     const x = random.int(0,54);
//     const y = random.int(0,6);
//     const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
//     const data = {
//         date: DATE
//     }
//     console.log(DATE);
//     jsonfile.writeFile(FILE_PATH, data, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
//         makeCommit.bind(this, --n));

//     });

// }
// makeCommit(500);


import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import { default as random } from 'random';

const FILE_PATH = './data.json';

const makeCommit = async (n) => {
    if (n === 0) return simpleGit().push();
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = { date: DATE };
    console.log(DATE);

    await jsonfile.writeFile(FILE_PATH, data);
    await simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });
    makeCommit(n - 1);
}

makeCommit(500);
