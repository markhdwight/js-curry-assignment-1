// I originally wrote completed the assignment using forloops and then went back and rewrote it utilizing reduce functions
// I have left the original forloop implementation in but commented out for preservation purposes

'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name => 
      listing.reduce(
        (prevReturned,curr) =>{
            if(curr.name === name)
               return prevReturned + curr.price
            return prevReturned + 0
        }, 0
      )
      // for(let i = 0; i<listing.length; i++)
      //   {
      //     if(name === listing[i].name)
      //       return listing[i].price
      //   }
    
/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.reduce(
        (previouslyReturned,currCart) => {
          let name = currCart.customer
          let total = currCart.items.reduce(
            (tempTotal,currItem) => tempTotal + listedPrice(listings)(currItem), 0)
          
          return previouslyReturned.concat({'customer':name,'total':total})
        },[]
      )
      // let cartTotals = []

      // for(let i = 0; i <carts.length; i++)
      //   {
      //       let tempName = carts[i].customer
      //       let tempTotal = new Number  //0
      //       for(let j = 0; j<carts[i].items.length; j++)
      //         {
      //             tempTotal += listedPrice(listings)(carts[i].items[j])
      //         }

      //         cartTotals[i] = {'customer':tempName,'total':tempTotal}
      //   }

      //   return cartTotals
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}

