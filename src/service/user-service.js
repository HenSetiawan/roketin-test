exports.getAllUsers = async () => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=25`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getNationality = async () => {
  try {
    let listCountry = [];
    const response = await fetch(`https://randomuser.me/api/?results=25`);
    const result = await response.json();
    result.results.forEach((user) => {
      listCountry.push(user.location.country);
    });
    const uniqueCountry = new Set(listCountry).size;
    return uniqueCountry;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getMostGeder = async () => {
  try {
    let male = 0;
    let female = 0;
    const response = await fetch(`https://randomuser.me/api/?results=25`);
    const result = await response.json();
    result.results.forEach((user) => {
      if (user.gender === 'male') {
        male++;
      } else {
        female++;
      }
    });

    if (male > female) {
      return 'male';
    }
    return 'female';
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getAverageAge = async () => {
  try {
    let ages = [];
    const response = await fetch(`https://randomuser.me/api/?results=25`);
    const result = await response.json();
    result.results.forEach((user) => {
      ages.push(user.dob.age);
    });

    const avrAge = ages.reduce((a, b) => a + b, 0) / ages.length;
    return Math.round(avrAge);
  } catch (error) {
    console.log(error);
    return error;
  }
};
