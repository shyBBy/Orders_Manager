import React from "react";
import {Center, Heading, Stack, VStack} from "native-base";
import {ScrollView} from "react-native";

interface SingleOrderProps {
  order: {
    id: number;
    customerName: string;
    amount: number;
  };
}

export const SingleOrder: React.FC<SingleOrderProps> = ({ order }) => {
  const { id, customerName, amount } = order;

  return (
    <div>
      <p>Order ID: {id}</p>
      <p>Customer Name: {customerName}</p>
      <p>Amount: {amount}</p>
      <hr />
    </div>
  );
};