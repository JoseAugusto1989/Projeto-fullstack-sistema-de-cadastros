import { render } from "@testing-library/react";
import React from "react";
import GetCustomer from "./GetCustomer"

describe('GetCustomer />', () => {
    it('should render without crashing', () => {
        render(<GetCustomer />)
    })
})
