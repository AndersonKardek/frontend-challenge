import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  position: absolute;
  bottom: 0;
  right: -10px;
  width: 17px;
  border-radius: 100%;
  padding: 0.5px 5px;
  background-color: var(--red-color);
  color: white;
  font-size: 12px;
`;

const DivContainer = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items");

  return (
    <DivContainer>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </DivContainer>
  );
}
