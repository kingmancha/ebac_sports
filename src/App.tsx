import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { adicionarAoCarrinho } from './store/slices/carrinhoSlice'
import { fetchProdutos } from './store/slices/produtosSlice'
import { favoritar } from './store/slices/favoritosSlice'
import { RootState } from './store/store'
import { Produto as ProdutoType } from './store/slices/produtosSlice'

function App() {
  const dispatch = useDispatch()

  const produtos = useSelector((state: RootState) => state.produtos.items)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  useEffect(() => {
    dispatch(fetchProdutos() as any)
  }, [dispatch])

  function adicionarAoCarrinhoHandler(produto: ProdutoType) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarHandler(produto: ProdutoType) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarHandler}
          adicionarAoCarrinho={adicionarAoCarrinhoHandler}
        />
      </div>
    </>
  )
}

export default App
