import React from "react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

function CartOrderSummary({ total }) {
  const navigate = useNavigate();
  const GotoPayment = () => {
    localStorage.setItem("total", total);
    navigate("/payment");
  };

  return (
    <div>
      <Stack
        spacing="8"
        borderWidth="1px"
        rounded="lg"
        padding="8"
        width="full"
      >
        <Heading size="md">Order Summary</Heading>

        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {total}
            </Text>
          </Flex>
        </Stack>
        <Button
          onClick={GotoPayment}
          colorScheme="blue"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      </Stack>
    </div>
  );
}

export default CartOrderSummary;
