const database = 'bolt://localhost';
const neo4j = require('neo4j-driver').v1;
const auth = neo4j.auth.basic('neo4j', 'omega16');
const driver = neo4j.driver(database, auth);

driver.onError = (error) => {
  console.log('Driver instantiation failed', error);
};

let session = driver.session();
session
  .run(`
    MATCH (p1:Person {name: {seeker}})-[r:Knows*2]-(p2:Person {interest: {interest}})
    RETURN (p1.name + " discovered " + p2.name) AS output`,
    {seeker: 'Susan', interest: 'business'}
  )
  .then((result) => {
    result.records.forEach((record) => {
      console.log(record._fields[0]);
    });
  })
  .catch((err) => {
    console.log('err', err);
  })
  .then(() => {
    session.close();
    driver.close();
  });
