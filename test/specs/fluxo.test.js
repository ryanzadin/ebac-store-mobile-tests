import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import adressPage from '../pageobjects/adress.page.js'

describe('Fluxo de Compra', () => {
    it('Fluxo de compra completo', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        await adressPage.addToCart()
        await adressPage.continueToPayment()
        await adressPage.completeCheckout()
    })
})

