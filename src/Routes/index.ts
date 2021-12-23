import express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import fs from 'fs';
import prossesImg from './prossesingImg';

const imgRoute = express.Router();

imgRoute.get('/', (req: Request, res: Response): void => {
    const sendData=(data:string):void=>{
        res.sendFile(data)
    }

    if (req.query.fileName && req.query.width && req.query.height) {
        const name: string = req.query.fileName as string;
        const width: number = Number(req.query.width) as number;
        const height: number = Number(req.query.height) as number;
        if (isNaN(width) || isNaN(height)) {
            res.send('Either width or height is NOT a Vailed Number');
        } else {
            fs.existsSync(path.resolve('Assets', 'cache_imgs')) ||
                fs.mkdir(path.resolve('Assets', 'cache_imgs'), err => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Directory created successfully!');
                });
            const imgPath: string = path.resolve(
                'Assets',
                'images',
                `${name}.jpg`
            );
            const newImgPath: string = path.resolve(
                'Assets',
                'cache_imgs',
                `${name}_${width}_${height}.jpg`
            );
            if (fs.existsSync(newImgPath)) {
                res.sendFile(newImgPath);
            } else {
                prossesImg(imgPath,newImgPath,width,height,sendData)
            }
        }
    } else {
        res.send('The Api Call Needs A Name, Width And Height To Work');
    }
});


export default imgRoute;
