import { Produto as ProdutoType } from '../store/slices/produtosSlice'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
            <button onClick={() => favoritar(produto)}>
              {favoritos.some((item) => item.id === produto.id)
                ? 'Remover Favorito'
                : 'Adicionar Favorito'}
            </button>
          </div>
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
