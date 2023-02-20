import app from './app'
import './db/sqlite3-connection';

app.listen(3000);

console.log(`Server is running on http://localhost:${3000}`);