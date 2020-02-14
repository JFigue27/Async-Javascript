const sometimesWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!!!!');
    } else {
      reject('Hupss!!!');
    }
  });
};

sometimesWillHappen()
  .then(r => console.log(r))
  .catch(err => console.error(err));

const sometimesWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Mamastes Cabron!!! Ya lo madriaste!!! :(');
      reject(error);
    }
  });
};

sometimesWillHappen2()
  .then(r => console.log(r))
  .catch(er => console.error(er));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
  .then(r => console.log('Array of results', r))
  .catch(err => console.error(err));
