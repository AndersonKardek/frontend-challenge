"use client";
import styled from "styled-components";
import { useProduct } from "@/hooks/useProduct";
import { DefaultContainer } from "@/components/DefaultContainer";
import { BackButton } from "@/components/BackButton";
import { formatPrice } from "@/components/utils/format-price";
import { ShopBagIcon } from "@/components/icons/shop-bag-icon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2.5rem;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 3.2rem;
    margin-top: 2.4rem;

    img {
      max-width: 64rem;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background: #115d8c;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 1rem 0;
        text-align: center;
        font-weight: 500;
        font-size: 1.6rem;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 1.2rem;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 2rem;
    color: var(--shapes-dark);
    margin-bottom: 2.4rem;
  }

  p {
    font-weight: 400;
    font-size: 1.2rem;
    color: (--text-dark);
  }

  div {
    margin-top: 2.4rem;

    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 1.6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, quantity: 1, id: searchParams.id }];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };

  return (
    <DefaultContainer>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <ShopBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultContainer>
  );
}
