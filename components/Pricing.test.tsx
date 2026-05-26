import { render, screen } from "@testing-library/react";
import Pricing from "./Pricing";

describe("Pricing component", () => {
  it("renders all package names and quote links", () => {
    render(<Pricing />);

    expect(screen.getByText("Essential Package")).toBeInTheDocument();
    expect(screen.getByText("Premium Package")).toBeInTheDocument();
    expect(screen.getByText("Luxury Package")).toBeInTheDocument();

    const quoteLinks = screen.getAllByRole("link", { name: /Get Free Quote/i });
    expect(quoteLinks).toHaveLength(3);
    quoteLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", expect.stringContaining("wa.me"));
    });
  });
});
