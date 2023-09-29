import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Components/Context";

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderViwe = () => {
    if(context.searchByTitle?.length>0) {
      if(context.filtereditems?.length>0){
        return (
          context.filtereditems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don`t have anything</div>
        )
      }
    } else {
      return (
        context.items?.map((item) => (
        <Card key={item.id} data={item} />
      ))
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a Product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event)=> context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
        {
          renderViwe()
        }
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
