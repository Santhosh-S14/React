import { render, screen } from "@testing-library/react";
import RestaurantContainer from "../RestaurantContainer";
import MOCK_DATA from "../../components/mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant component with props data", () => {
  render(<RestaurantContainer resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Domino's Pizza");
  expect(restaurantName).toBeInTheDocument();
});
