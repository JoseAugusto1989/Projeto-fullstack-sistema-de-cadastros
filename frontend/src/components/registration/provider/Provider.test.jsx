import { render } from "@testing-library/react";
import React from "react";
import Provider from "./Provider"

describe('Provider />', () => {
    it('should render without crashing', () => {
        render(<Provider />)
    })
})