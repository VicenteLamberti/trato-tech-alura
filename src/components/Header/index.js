import styles from './Header.module.scss';
import TituloComImagemImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo = {titulo}
          descricao = {descricao}
        />

      }
      {titulo && imagem &&
        <TituloComImagemImagem
          titulo = {titulo}
          descricao = {descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  )
}