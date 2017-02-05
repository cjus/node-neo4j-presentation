const database = 'bolt://localhost';
const neo4j = require('neo4j-driver').v1;
const auth = neo4j.auth.basic('neo4j', 'omega16');
const driver = neo4j.driver(database, auth);

driver.onError = (error) => {
  console.log('Driver instantiation failed', error);
};

let session = driver.session();
session
  .run(
    'MATCH (p:Person {name: {nameParam}}) RETURN p.name, p.age, p.interest',
    {nameParam: 'Alex'}
  )
  .then((result) => {
    result.records.forEach((record) => {
      console.log(`Name: ${record.get('p.name')}`);
      console.log(`Age: ${record.get('p.age')}`);
      console.log(`Interest: ${record.get('p.interest')}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  })
  .then(() => {
    session.close();
    driver.close();
  });
