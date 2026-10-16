import sql from 'mssql';
import { config } from './config.js';
const connect = async () => {
 try {
   await sql.connect(config);
   console.log('Connected to the database!');
 } catch (err) {
   console.error('Connection failed:', err);
 }
};

export default connect;
// connect();