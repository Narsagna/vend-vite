import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import productRoutes from '../vend-vite/src/product/routes.js'; // importing routes.js

const app = express();
app.use(cors());
app.use(express.json());

// health check

app.get('/health', async (req, res) => {
    try {
      res.send("Health is good");
    } catch (error) {
      console.error(error)
      res.status(500).send(error.response.data.error.message || 'Something went wrong');
    }
  });

  app.use('/api/v1/product', productRoutes);


const port = process.env.PORT || 3000; //doing this for railway deployment
app.listen(port, "0.0.0.0", () => console.log(`App listening on port ${port}`)); // also for railway


