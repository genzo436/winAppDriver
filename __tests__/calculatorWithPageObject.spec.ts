import TestEnvironment from "../TestEnvironment";
import CalculatorPage from '../Pages/CalculatorPage'

beforeAll(() => {
    return TestEnvironment.setup();;
})

afterAll(() => {
    return TestEnvironment.teardown();
})

describe.skip('Use PageObject', () => {
    beforeEach(async () => {
        CalculatorPage.clear();
        await CalculatorPage.waitForPageLoaded();
    })

    test('Plus', async () => {
            expect(await CalculatorPage.plus('11', '12')).toBe('La pantalla muestra 23');
        })

    test('Minus', async () => {
        expect(await CalculatorPage.minus('11', '12')).toBe('La pantalla muestra -1');
    })

    test('Multiply', async () => {
        expect(await CalculatorPage.multiply('11', '12')).toBe('La pantalla muestra 132');
    })

    test('Divide', async () => {
        expect(await CalculatorPage.divide('144', '12')).toBe('La pantalla muestra 12');
    })
})