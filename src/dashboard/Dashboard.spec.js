import React from "react";
import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";
// Cleans up unnecessary files
import "react-testing-library/cleanup-after-each";

describe("<Dashboard />", () => {
  it("Default state set to unlocked and open", () => {
    const { getByText } = render(<Dashboard />);
  });
  describe("Checks all text being rendered based on button clicks", () => {
    const { queryByText, getByText } = render(<Dashboard />);

    const closeButton = queryByText("Close Gate");
    expect(closeButton);


    fireEvent.click(closeButton);


    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));


    const lockButton = queryByText("Lock Gate");
    expect(lockButton);


    fireEvent.click(lockButton);


    expect(getByText("Unlock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Locked"));
    expect(getByText("Closed"));


    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton);


    fireEvent.click(unlockButton);


    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));


    const openButton = queryByText("Open Gate");
    expect(openButton);


    fireEvent.click(openButton);


    expect(getByText("Lock Gate"));
    expect(getByText("Close Gate"));
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
  });
});
