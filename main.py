import sqlite3

# Conectarse a la base de datos
conn = sqlite3.connect('database.db')

# Crear la tabla si no existe
conn.execute('''CREATE TABLE IF NOT EXISTS userdata 
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 username TEXT NOT NULL,
                 password TEXT NOT NULL)''')

# Insertar un usuario y contraseña en la tabla
conn.execute("INSERT INTO userdata (username, password) VALUES (?, ?)", ('admin', '123'))
conn.commit()

# Cerrar la conexión a la base de datos
conn.close()