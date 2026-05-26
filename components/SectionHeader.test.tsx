import { render, screen } from "@testing-library/react";
import SectionHeader from "./SectionHeader";

describe("SectionHeader component", () => {
  it("renders title, eyebrow, and subtitle", () => {
    render(
      <SectionHeader
        eyebrow="Packages"
        title="Interior Packages & Pricing"
        subtitle="Indicative starting ranges for different home sizes and lifestyles."
      />
    );

    expect(screen.getByText("Packages")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Interior Packages & Pricing/i })).toBeInTheDocument();
    expect(screen.getByText(/Indicative starting ranges for different home sizes and lifestyles./i)).toBeInTheDocument();
  });
});
