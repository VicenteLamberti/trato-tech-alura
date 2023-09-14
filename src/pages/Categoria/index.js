import Header from "../../components/Header";
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

export default function Categoria(){
    const {nomeCategoria} = useParams();
    const {categoria, itens} = useSelector(state=>{
        return{
            categoria:state.categorias.find(categoria=>categoria.id === nomeCategoria),
            itens:state.itens.filter(item=>item.categoria ===nomeCategoria)
        }
    });
    console.log( itens)
    return(
        <div>
            <Header
            titulo={categoria.nome}
            descricao={categoria.descricao}
            imagem={categoria.header}/>
        </div>
    )
}