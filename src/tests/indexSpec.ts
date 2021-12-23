import supertest from 'supertest';
import app from '../index';
import prossesImg from '../utilities/prossesingImg';
import * as path from 'path';


const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    }
)
    it('gets the api endpoint to work with Pramters', async () => {
        const response = await request.get('/api/images?fileName=fjord&width=560&height=900');
        expect(response.status).toBe(200);
    }
)});


const name: string = "fjord";
const width: number = 500;
const height: number = 500;

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




describe('Test prossesing for images', () => {
    it('gets the image prossesed', async () => {
        const callback =(path:string):void=>{
            expect(path).toEqual(newImgPath)
        }
        prossesImg(imgPath,newImgPath,width,height,callback)
    }
)});
