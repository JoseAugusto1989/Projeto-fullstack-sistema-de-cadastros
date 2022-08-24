import { render } from "@testing-library/react";
import React from "react";
import Product from "./Product"

describe('Product />', () => {
    it('should render without crashing', () => {
        render(<Product />)
    })
})
