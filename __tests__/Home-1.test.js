import React from 'react';
import { render, screen } from '@testing-library/react';
import Home1 from '@/components/merchant/homepages/Home1'; // Adjust the import path as necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Home1 Component', () => {
    test('renders the title', () => {
        render(<Home1 />);
        const titleElement = screen.getByText(/FELiN Ads/i);
        expect(titleElement).toBeInTheDocument(); // Check if title is rendered
    });

    test('renders the introductory text', () => {
        render(<Home1 />);
        const introText = screen.getByText(/Το FELiN Ads είναι ένα νέο εργαλείο/i);
        expect(introText).toBeInTheDocument(); // Check if introductory text is rendered
    });

    test('renders the trusted by heading', () => {
        render(<Home1 />);
        const trustedByHeading = screen.getByText(/Trusted by/i);
        expect(trustedByHeading).toBeInTheDocument(); // Check if "Trusted by" heading is rendered
    });

    test('renders the correct number of trusted brands', () => {
        const { container } = render(<Home1 />);
        const trustedIcons = container.getElementsByClassName('felin-trusted-by__icon');
        expect(trustedIcons.length).toBe(4); // Check if 4 trusted brands are rendered
    });

    test('renders the sign-up button', () => {
        render(<Home1 />);
        const signUpButton = screen.getByRole('link', { name: /Ξεκινήστε/i });
        expect(signUpButton).toBeInTheDocument(); // Check if the sign-up button is rendered
        expect(signUpButton).toHaveAttribute('href', 'signup'); // Check if the link has the correct href
    });

    test('renders the correct promotional text', () => {
        render(<Home1 />);
        const promoText = screen.getByText(/Δωρεάν Εγγραφή/i);
        expect(promoText).toBeInTheDocument(); // Check if promotional text is rendered
    });

    test('renders the main image', () => {
        render(<Home1 />);
        const imageElement = screen.getByAltText('FELiN Ads');
        expect(imageElement).toBeInTheDocument(); // Check if the image is rendered
        expect(imageElement).toHaveAttribute('src', 'img/felin-adds.jpg'); // Check if the correct image source is used
    });
});
