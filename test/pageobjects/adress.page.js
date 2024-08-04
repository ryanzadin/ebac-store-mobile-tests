import { $ } from '@wdio/globals'

class AdressPage{

    async addToCart(){
        (await $(`-ios predicate string: name == "addToCart"`)).click()
    }

    async continueToPayment(){
       (await $(`-ios predicate string: name == "selectAddressOrContinueToPayment"`)).click()
    }

    async completeCheckout(){
        (await $(`-ios predicate string: name == "completeCheckout"`)).click()
     }
}
