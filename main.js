


const coin = {
    state: 0,
    flip: function () {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.

        this.state = Math.floor(Math.random() * 2);

    },
    toString: function () {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.

        if (this.state === 0) { return "heads"; }
        else { return "tail"; }



    },
    toHTML: function () {
        const image = document.createElement('img');
        let heads = "data:image/webp;base64,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"
        let tails = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwl6TtE7Y3JnuC3Rqy-iX59Mj1CeW83ZDSm9c8O4R0Q9Hu_k-SvEA8Glgmj1raA3OaPDhG7_nAxF8vlik0Oksr03DLQufMReiC3ehAWYAtuEMmDqLu-U-s&usqp=CAc"
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.

        if (this.state === 0) { image.src = heads; }
        else { image.src = tails; }

        return image;
    }
};


console.log(coin)
coin.flip()
console.log(coin)
console.log(coin.toString())
document.body.appendChild(coin.toHTML())






function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.

    for (i = 1; i <= 20; i++) {
        coin.flip()
        document.write(coin.toString())
        // document.write(coin.toHTML())
        results.push(coin.toString())
    }
    return results
}

display20Flips()

function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.
    for (i = 1; i <= 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toHTML())
        results.push(coin.toHTML())
    }
    return results

}

display20Images()