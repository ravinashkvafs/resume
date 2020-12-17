export function LoadImageFn({ src = '', element = null, prefix = '', mode = 'BG' }: any, cb: any = () => { }) {

    if (!src) return cb('SRC_ERR');
    if (!element) return cb('ELEMENT_ERR');

    const img = new Image();
    img.src = src;

    img.onload = () => {
        // console.log('LOADED', src)

        switch (mode) {
            case 'BG':
                element.style.backgroundImage = `${prefix || ''}url(${src})`;
                break;
            case 'IMG':
                element.src = img.src;
                break;
            default: return cb('MODE_ERR');
        }

        return cb();
    };

    img.onerror = (er) => {
        return cb('IMG_ERR');
    };

}

export function ManageImageResolutions({ image_obj, element, mode = 'BG' }: any) {

    LoadImageFn({ src: image_obj['img_ls'], element, prefix: image_obj['prefix'] || '', mode }, (er: any) => {
        if (er === 'ELEMENT_ERR') return;
        LoadImageFn({ src: image_obj['img_hs'], element, prefix: image_obj['prefix'] || '', mode }, (er: any) => {
        });
    });

}

// MANAGE SCREEN WIDTHS
const screen_range: any = {
    'XS': { w_min: 0, w_max: 539, enum: 1 },
    'SM': { w_min: 540, w_max: 719, enum: 2 },
    'MD': { w_min: 720, w_max: 959, enum: 3 },
    'LG': { w_min: 960, w_max: 1139, enum: 4 },
    'XL': { w_min: 1140, w_max: 99999, enum: 5 },
};

export function WidthCheck(operator: string, mode: any): boolean {
    operator = operator ? operator.toUpperCase().trim() : '';
    mode = mode ? mode.toUpperCase().trim() : '';

    mode = screen_range[mode] ? screen_range[mode] : screen_range['XL'];
    const w = document.body.clientWidth;

    console.log(operator, mode, w)

    if (operator === 'LT' && w < mode['w_min']) return true;
    else if (operator === 'GT' && w > mode['w_max']) return true;

    return false;
}

// MANAGE DIMENSIONS
let debouncing_timeout: any;

export function ManageDimensions(setDim: any) {
    clearTimeout(debouncing_timeout);

    debouncing_timeout = setTimeout(() => {
        const w = document.body.clientWidth;
        const h = document.body.clientHeight;
        let sz = 'XL';

        for (let k in screen_range) {
            if (screen_range[k]['w_min'] <= w && screen_range[k]['w_max'] >= w) {
                sz = k;
                break;
            }
        }

        setDim({ width: w, height: h, size: sz });
    }, 200);
}