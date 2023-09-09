import {LoginPage} from "../e2e/pages/login_pages.cy"
import {DashboardPage} from "../e2e/pages/dashboard_pages.cy"
import {YourcartPage} from "../e2e/pages/yourcart_pages.cy"
import {CheckoutPage} from "../e2e/pages/checkout_pages.cy"
import {OverviewPage} from "../e2e/pages/overview.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let yourcartPage = new YourcartPage()
let checkoutPage = new CheckoutPage()
let overviewPage = new OverviewPage()

const URL = 'https://www.saucedemo.com/'
const IconCart = 'shopping_cart_link'

it('Verifying successfull checkout', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()

    dashboardPage.clickAddToCartBtn()
    dashboardPage.clickIconCart()

    yourcartPage.clickCheckoutBtn()

    checkoutPage.checkout('leon', 'tester', '13120')

    overviewPage.clickFinishBtn()
    overviewPage.assertSuccessfullCheckout()

})

it('Verifying unsuccessful checkout with empty personal data', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()

    dashboardPage.clickAddToCartBtn()
    dashboardPage.clickIconCart()

    yourcartPage.clickCheckoutBtn()

    checkoutPage.clickContinueBtn()
    checkoutPage.assertErrorNotif()


})