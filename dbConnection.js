const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://ewyoomuroyviea:e8b9671ff5e7b9c87377cea192d74fa364a71a4950bada1b45e171cab3acda3b@ec2-52-5-110-35.compute-1.amazonaws.com:5432/d6aoq3uhk57921',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client