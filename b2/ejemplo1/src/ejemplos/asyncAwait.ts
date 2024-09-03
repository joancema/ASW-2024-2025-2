import { deportes, Ideporte, categorias, Icategoria } from './data'


async function buscarDeporteAsyncAwait(id:number){
    const deporte = deportes.find(deporte => deporte.id === id);
    if (!deporte) {
        throw new Error('No se encontró el deporte');
    }
    return deporte;
}
async function buscarCategoriaAsyncAwait(id:number){
    const categoria = categorias.find(categoria => categoria.id === id);
    if (!categoria) {
        throw new Error('No se encontró la categoria');
    }
    return categoria;
}


export { buscarDeporteAsyncAwait, buscarCategoriaAsyncAwait }