/**
 * @vitest-environment jsdom
 */

import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
// import { userEvent } from "./setupTest";

describe('App', () => {
    test('should render the correct elements', () => {
        render(<App />);
        expect(screen.getByAltText('giphy')).toBeInTheDocument()
    })
})