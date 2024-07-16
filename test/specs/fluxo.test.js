import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import addcartPage from '../pageobjects/addcart.page.js'
import adressPage from '../pageobjects/adress.page.js'

describe('Login', () => {
    it('login com credenciais validas', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu(profileTab)
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        await addcartPage.addToCart()
        await adressPage.addAdress()
    })
})

