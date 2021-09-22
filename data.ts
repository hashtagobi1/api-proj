const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "Mother123$$",
  database: "personalInfo",
});

const getAllActors = async () => {
  try {
    client.connect();

    const res = await client.query("SELECT * FROM actor limit 5");
    await client.end();
    console.log(res.rows);

    return res;
  } catch (error) {
    console.log("error!", error);
  }
};

const addEmail = async () => {
  try {
    await client.query("ALTER TABLE actor ADD email varchar(255) ;");
  } catch (error) {}
};

const addAge = async () => {
  try {
    await client.query("ALTER TABLE actor ADD age INTEGER UNIQUE ;");
  } catch (error) {}
};

const addColumns = (): void => {
  addEmail();
  addAge();
  getAllActors();
};

const DELETE_AGE_EMAIL = async (): Promise<void> => {
  try {
    await client.query(
      "ALTER TABLE actor DROP COLUMN IF EXISTS age, DROP COLUMN IF EXISTS email ;"
    );
  } catch (error) {}
};

const deleteColumns = (): void => {
  DELETE_AGE_EMAIL();
  getAllActors();
};

const insertDetails = async () => {
  try {
    await client.query(
      // TODO: ideally we'd want to only insert if the columns exist
      // TODO: why can't we update age? ERROR -> column "age" of relation "actor" contains null values
      "UPDATE actor SET email = '@gmail.com';"
    );
  } catch (error) {}
};

const insertColumns = () => {
  insertDetails();
  getAllActors();
};
// addColumns();
deleteColumns();
// insertColumns();
export { getAllActors };
