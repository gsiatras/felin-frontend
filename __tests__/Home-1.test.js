// Home1.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home1 from "@/components/b2c/homepages/Home-1";
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher

describe('Home1 Component', () => {
    test('renders the title correctly', () => {
        render(<Home1 />);
        const titleElement = screen.getByText(/καταστήματα β2β/i); // Match case-insensitively
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the correct number of categories', () => {
        const { container } = render(<Home1 />);
        const categoryContainers = container.getElementsByClassName('category-container'); // Adjust class name based on CategoryContainer implementation
        expect(categoryContainers.length).toBe(10); // Adjust this number based on the categories defined
    });
});
