import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import videoRoutes from './routes/video/videos.routes'
import itemRoutes from "./routes/items/items.routes"
import entryRoutes from "./routes/entries/entries.routes";
const app =  express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(videoRoutes, itemRoutes, entryRoutes)

export default app;