import { deportes, Ideporte, Icategoria, Ipais, pais, categorias } from './data'

function buscarDeporte(id: number , 
    callback: (error: Error | null, deporte?: Ideporte) => void) {
    const deporte = deportes.find(deporte => deporte.id === id);
    if (!deporte) {
        callback(new Error(`No se ha encontrado el deporte con id ${id}`));
        return;
    }
    callback(null, deporte);
}
function buscarCategoria(id: number , 
    callback: (error: Error | null, categoria?: Icategoria) => void) {
    const categoria = categorias.find(categoria => categoria.id === id);
    if (!categoria) {
        callback(new Error(`No se ha encontrado la categoria con id ${id}`));
        return;
    }
    callback(null, categoria);
}
function buscarPais(id: number , 
    callback: (error: Error | null, pais?: Ipais) => void) {
    const p = pais.find(p => p.id === id);
    if (!p) {
        callback(new Error(`No se ha encontrado el pais con id ${id}`));
        return;
    }
    callback(null, p);
}

export {
    buscarDeporte,
    buscarCategoria,
    buscarPais
}
