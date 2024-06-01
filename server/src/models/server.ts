import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto';
import routesOrder from '../routes/order'
import db from '../db/connection'

class Server {
    private app : Application;
    private port: string;

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
           console.log(`Aplicacion corriendo en el puerto $ ${this.port}`) 
        })
    }

    routes(){
        this.app.get('/', (req: Request, res:Response) => {
            res.json({
                msg: 'API wonrking'
            })
        })
        this.app.use('/api/productos', routesProducto)
        this.app.use('/api/orders', routesOrder)
    }


    midlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log("DB Lista")
            
        } catch (error) {
            console.log(error);
            
        }

    }

}

export default Server;