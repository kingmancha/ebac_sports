import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { adicionarAoCarrinho } from './store/slices/carrinhoSlice'
import { fetchProdutos } from './store/slices/produtosSlice'
import { RootState } from './store/store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const produtos = useSelector((state: RootState) => state.produtos.items)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favorios.itens)

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  function adicionarAoCarrinhoHandler(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritar(produto: Produto) {
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinhoHandler}
        />
      </div>
    </>
  )
}

export default App
