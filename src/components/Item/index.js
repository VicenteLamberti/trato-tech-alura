import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavorito } from '../../store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from 'store/reducers/carrinho';

export default function Item(props) {
    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id
    } = props;


    const iconeProps = {
        size: 24,
        color: '#041833'
    }

    function resolverFavorito() {
        dispatch(mudarFavorito(id));
    }
    function resolverCarrinho(){
        dispatch(mudarCarrinho(id))
    }

    const dispatch = useDispatch();
    const estaNoCarrinho = useSelector(state=>state.carrinho.some(itemNoCarrinho=>itemNoCarrinho.id === id))



    return (
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed()}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={resolverFavorito}/>
                            : <AiOutlineHeart className={styles['item-acao']} onClick={resolverFavorito}/>
                        }
                        <FaCartPlus
                            {...iconeProps}
                            color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                            className={styles['item-acao']}
                            onClick={resolverCarrinho}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}