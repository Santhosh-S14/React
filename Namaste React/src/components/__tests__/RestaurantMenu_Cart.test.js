import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantMenu.json";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Veg Pizza(14)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(15);
});
