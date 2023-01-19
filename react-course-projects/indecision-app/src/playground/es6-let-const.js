var nameVar = 'Santhosh';
var nameVar = 'Harshith';
console.log('nameVar', nameVar);

let nameLet = 'Santhosh';
nameLet = 'Harshith';
console.log('nameLet', nameLet);

const nameConst = 'Santhosh';
console.log('nameConst', nameConst);

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Santhosh Santhanam'));