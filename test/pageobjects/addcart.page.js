import { $ } from '@wdio/globals'

class AddCart {

  async addToCart(){
    (await $(`-ios predicate string:name == "add To Cart"`)).click()
 }
}

export default new AddCart();
