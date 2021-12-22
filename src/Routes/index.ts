import express from 'express';   
import * as path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const imgRoute = express.Router();

imgRoute.get('/', (req, res) => {
    if(req.query.fileName&&req.query.width&&req.query.height)
    {
        const name = req.query.fileName as string;
        const width = Number(req.query.width) as number ;
        const height = Number(req.query.height) as number;
        const imgPath = path.resolve('Assets','images', `${name}.jpg`);
        const newImgPath = path.resolve('Assets','cache_imgs',`${name}_${width}_${height}'jpg'`);
            if (fs.existsSync(newImgPath)) {
                res.sendFile(newImgPath);
            }
            else{
                sharp(imgPath)
                .rotate()
                .resize(width,height)
                .jpeg({ mozjpeg: true })
                .toBuffer()
                .then( (data:Buffer) => { fs.writeFileSync(newImgPath, data);})
                .then(()=> {res.sendFile(newImgPath)})
                .catch( (err:string) => { res.send("No Such File Was Found") ,console.log(err)});
            }
        }else
        {
            res.send("The Api Call Needs A Name, Width And Height To Work")
        }
    });

export default imgRoute;
