## Exercises

1. The output shows the product being created, painted and packaged, but it stops after logging "Product packaged for Next Day.". The next expected log would be "Loading product onto truck." but this isn't showing so this is where the problem is. There seem to be no issues with the `loadOnTruck` function, however there is a problem when the product is loaded onto the truck. The second to line last line reads `product.loadOnTruck;` but it should read `product.loadOnTruck();`. The missing `()` is what is causing the problem.

2. We expect it to log "Packaging product for " + shippingType + "." and "Product packaged for " + shippingType + "." but instead of showing the shippingType we get back 'undefined'. The problem is in the third line from the bottom, `product.package();`. The parenthesis are empty and so `undefined` is being returned as the `shippingType`. The line should read `product.package(shippingType);`.
