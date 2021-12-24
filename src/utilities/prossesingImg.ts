import sharp from "sharp"
import fs from 'fs'
import * as path from 'path';

const prossesImg=(imgPath:string,newImgPath:string,width:number,height:number,callback:CallableFunction):void=>{
sharp(imgPath)
.rotate()
.resize(width, height)
.jpeg({ mozjpeg: true })
.toBuffer()
.then((data: Buffer) => {
    fs.writeFileSync(newImgPath, data);
})
.then(() => {
    callback(newImgPath)
})
.catch((err: string) => {
    callback(path.resolve(
        'Assets',
        'images',
        `Error.jpg`
    )), console.log(err);
});
}

export default prossesImg;