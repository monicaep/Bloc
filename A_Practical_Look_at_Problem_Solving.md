## Exercises

1. Based on this output, it seems that the `loadOnTruck` function is the issue. The output shows the product being created, painted and packaged, but it stops after logging "Product packaged for Next Day.". If the code was running as it should the next expected log would be "Loading product onto truck." but this isn't showing so this is where the problem is.

2. We expect it to log "Packaging product for " + shippingType + "." and "Product packaged for " + shippingType + "." but instead of showing the shippingType we get back 'undefined'. This means that the issue is either in the  `package` function or there was an error made when initially calling `order` and the `shippingType` was not defined when the call was made. I don't see an error in the `package` function so I will assume that the error was made when `order` was initially called.  
