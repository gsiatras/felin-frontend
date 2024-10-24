// Home1.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home1 from "@/components/b2c/homepages/Home-1"; // Ensure this path is correct
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Home1 Component', () => {
    test('renders the title correctly', () => {
        render(<Home1 />);
        const titleElement = screen.getByText(/καταστήματα β2β/i); // Match case-insensitively
        expect(titleElement).toBeInTheDocument(); // Check if title is rendered
    });

    test('renders static elements correctly', () => {
        render(<Home1 />);
        // Check for any static element you know should exist
        const staticElement = screen.getByText(/some static text/i); // Adjust this text to match actual content
        expect(staticElement).toBeInTheDocument(); // Check if it is rendered
    });

    test('renders a specific class name element', () => {
        const { container } = render(<Home1 />);
        const specificElement = container.querySelector('.specific-class-name'); // Replace with an actual class name
        expect(specificElement).toBeInTheDocument(); // Check if it is rendered
    });
});
