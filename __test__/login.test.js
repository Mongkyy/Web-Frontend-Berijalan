import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../src/app/login/page";
import Container from "@/components/Provider";

describe("Login Page Test", () => {
  it("should render login page", () => {
    render(
      <Container>
        <Login />
      </Container>
    );

    // Check if the login page elements are rendered
    const loginHeading = screen.getByText("Login");
    const emailInput = screen.getByLabelText("Gmail");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });
    const registerLink = screen.getByText("Don't have an account? Register");

    // Assertions to verify that the elements are in the document
    expect(loginHeading).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
});
