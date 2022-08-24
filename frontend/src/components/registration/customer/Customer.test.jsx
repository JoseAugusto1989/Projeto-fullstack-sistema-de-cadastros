import { render } from "@testing-library/react";
import React from "react";
import Customer from "../customer/Customer"

describe('Customer />', () => {
    it('should render without crashing', () => {
        render(<Customer />)
    })
})