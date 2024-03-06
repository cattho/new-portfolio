import { render, screen,} from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../components/Home/Home";

describe("Pruebas del componente Home", () => {
  test("Renderizacion inicial del componente Home", () => {
    render(<Home />);
    expect(screen.getByTestId("greeting")).toBeInTheDocument();
  });
});
