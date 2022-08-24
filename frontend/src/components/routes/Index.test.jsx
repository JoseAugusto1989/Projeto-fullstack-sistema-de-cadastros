import { render } from "@testing-library/react";
import React from "react";
import Index from "./Index"

describe('Index />', () => {
    it('should render without crashing', () => {
        render(<Index />)
    })
})
