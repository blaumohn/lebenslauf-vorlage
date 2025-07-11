import { render, screen } from "@testing-library/react";
import TagClient from "../../app/components/TagClient.jsx";

describe("TagClient", () => {
  it("zeigt Text an", () => {
    render(<TagClient>Beispiel</TagClient>);
    expect(screen.getByText("Beispiel")).toBeInTheDocument();
  });
});
