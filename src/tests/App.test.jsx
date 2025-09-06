import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../App.jsx'
import userEvent from "@testing-library/user-event";

describe('App Component', () => {
  it('Renders magnificent rhinos', ()=>{
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });


  it('renders radical Manificent Rhinos after button click', async () => {
    const user = userEvent.setup();
    
    render(<App />)
    const button = screen.getByRole("button", {name: "Click Me"});

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch("Radical Monkeys");

  });



})


