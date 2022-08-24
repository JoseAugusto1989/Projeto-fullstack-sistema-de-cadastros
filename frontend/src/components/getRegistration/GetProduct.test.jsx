import { render } from "@testing-library/react";
import React from "react";
import GetProduct from "./GetProduct"

describe('GetProduct />', () => {
    it('should render without crashing', () => {
        render(<GetProduct />)
    })
})