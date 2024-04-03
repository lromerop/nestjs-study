SELECT 'CREATE DATABASE developdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'developdb')\gexec