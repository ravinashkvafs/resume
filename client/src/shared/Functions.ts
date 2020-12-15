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