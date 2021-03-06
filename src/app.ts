import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import videoRoutes from './routes/video/videos.routes'
import itemRoutes from "./routes/items/items.routes"
import entryRoutes from "./routes/entries/entries.routes";
import entryDetailRoutes from './routes/entrydetails/entryDetails.routes'
import saleRoutes from './routes/sales/sales.routes'
import saleDetailRoutes from './routes/saledatails/saleDetails.routes'
import depositRoutes from './routes/deposits/deposit.routes'
import expenseRoutes from "./routes/expenses/expenses.routes";
const app =  express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(videoRoutes, itemRoutes, entryRoutes, saleRoutes, saleDetailRoutes,depositRoutes, expenseRoutes, entryDetailRoutes)

export default app;