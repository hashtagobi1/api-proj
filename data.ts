const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "Mother123$$",
  database: "personalInfo",
});

client.connect();



const getPerson = async (id: any) => {
  // const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
  // const res = await client.query("SELECT $1::text as message", ["Hello world!"]);

  const res = await client.query(
    "SELECT * FROM actor",
    (res: any, err: any) => {
        console.log(client.database) // * This says 'personalInfo'
      if (res) {
          console.log('Success!')
        console.log(res.rows);
        // console.log(res.rows[id])
      } else if(err) {
        console.log(err.message);
        console.log('Fail!')
      }
    }
  );

//   console.log(res.rows[0].message); // Hello world!
  await client.end();

  return res;
};

getPerson(1)

export { getPerson };
