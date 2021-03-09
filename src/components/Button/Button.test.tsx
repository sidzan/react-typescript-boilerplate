import {render} from '@testing-library/react';
import * as React from 'react';
import Button from './Button'

describe("Button", () => {
    it ('should render Hello World Correctly',()=>{
        const {getByText} = render(<Button/>)
        expect(getByText("Hello World")).toBeInTheDocument();
    })

})

