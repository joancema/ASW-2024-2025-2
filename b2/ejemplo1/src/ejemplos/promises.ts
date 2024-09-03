import { deportes, Ideporte, categorias, Icategoria } from './data'


function buscarDeportePromise(id: number): Promise<Ideporte> {
    return new Promise((resolve, reject) => {
        const deporte = deportes.find(deporte => deporte.id === id);
        if (deporte) {
            resolve(deporte);
        } else {
            const error = new Error('No se encontró el deporte');
            reject(error);
        }
    });
}
function buscarCategoriaPromise(id: number): Promise<Icategoria> {
    return new Promise((resolve, reject) => {
        const categoria = categorias.find(categoria => categoria.id === id);
        if (categoria) {
            resolve(categoria);
        } else {
            const error = new Error('No se encontró la categoria');
            reject(error);
        }
    });
}

export { buscarDeportePromise, buscarCategoriaPromise }