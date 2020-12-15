import { Server_URL } from '../env.json';

export const ImageSet: any = {
    'PicSelf': {
        img_ls: `${Server_URL}/doc/pics/avinash_blur.png`,
        img_hs: `${Server_URL}/doc/pics/avinash.png`,
        prefix: `linear-gradient(to right, rgba(29,29,29,0.8), rgba(0,0,0,0), rgba(29,29,29,0.8)), linear-gradient(to top, rgba(29,29,29,0.8), rgba(0,0,0,0), rgba(29,29,29,0)), `
    },
    'FmIcon': {
        img_ls: `${Server_URL}/doc/pics/fm_blur.png`,
        img_hs: `${Server_URL}/doc/pics/fm.png`
    },
    'IdIcon': {
        img_ls: `${Server_URL}/doc/pics/id_blur.png`,
        img_hs: `${Server_URL}/doc/pics/id.png`
    },
};