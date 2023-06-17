import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 256px;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 0px 0px 4px 4px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      padding: 0px;
      margin: 8px 0;

      background-color: var(--shapes);
    }
  }
`;

export function ProductCard(props: ProductCardProps) {
  function formatValue(valueInCents: number) {
    const valorEmReais = valueInCents / 100;

    return valorEmReais.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const price = formatValue(props.price);

  return (
    <Card>
      <img src={props.image} alt="foto" />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}
