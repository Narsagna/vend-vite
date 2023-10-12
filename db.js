import pg from 'pg';
const { Pool } = pg;


const pool = new Pool({
    user: "nars",
    host: "localhost",
    database: "product",
    password: "639002",
    port: 4321,
});

export default pool;