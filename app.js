const express = require('express')
const getMetaData = require('metadata-scraper')
const app = express()
const port = 3000


app.get('/', async (req, res)  => {
    // const url = 'https://github.com/BetaHuhn/metadata-scraper'

const html = `<meta name="og:title" content="Example"> <meta name="og:description" content="This is an example.">`;

const options = {
    // html: html, 
    url: 'https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00MNV8E0C/ref=sr_1_1?adgrpid=140678819256&hvadid=617135671197&hvdev=c&hvlocphy=9077135&hvnetw=g&hvqmt=e&hvrand=17385475743557332625&hvtargid=kwd-917726382706&hydadcr=22333_13333064&keywords=amazon+items&qid=1680300787&sr=8-1' // Optional URL to make relative image paths absolute
}

// const data = await getMetaData(options)

    const url = 'https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00MNV8E0C/ref=sr_1_1?adgrpid=140678819256&hvadid=617135671197&hvdev=c&hvlocphy=9077135&hvnetw=g&hvqmt=e&hvrand=17385475743557332625&hvtargid=kwd-917726382706&hydadcr=22333_13333064&keywords=amazon+items&qid=1680300787&sr=8-1'

    await getMetaData(url).then((data) => {
        console.log(data)
    })
  res.send('data')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})