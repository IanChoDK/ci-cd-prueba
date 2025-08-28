import { render, screen, fireEvent } from "@testing-library/react";
import Semaforo from "./semaforo";

// test básico de render
test("renderiza los botones Rojo, Amarillo y Verde", () => {
  render(<Semaforo />);
  expect(screen.getByText("Rojo")).toBeInTheDocument();
  expect(screen.getByText("Amarillo")).toBeInTheDocument();
  expect(screen.getByText("Verde")).toBeInTheDocument();
});

// test funcionalidad de botones
test("cambia el color al hacer click en los botones", () => {
  render(<Semaforo />);

  const circle = screen.getByRole("presentation"); // referencia al div del círculo
  const rojoBtn = screen.getByText("Rojo");
  const amarilloBtn = screen.getByText("Amarillo");
  const verdeBtn = screen.getByText("Verde");

  // click en amarillo
  fireEvent.click(amarilloBtn);
  expect(circle).toHaveStyle("background-color: yellow");

  // click en verde
  fireEvent.click(verdeBtn);
  expect(circle).toHaveStyle("background-color: green");

  // click en rojo
  fireEvent.click(rojoBtn);
  expect(circle).toHaveStyle("background-color: red");
});
