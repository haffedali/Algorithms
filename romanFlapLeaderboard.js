        axios.get("https://www.npr.org/sections/news/")
        .then((response) => {
            let $ = cheerio.load(response.data);

            $(".item has-image").each(function(i,element) {
                let result = {};
                
                result.title = $(this).children(".item-info")
                .find("h2.title").text();

                result.link = $(this).children(".item-info")
                .find("h2.title").find("a").attr("href");

                result.teaser = $(this).children(".item-info")
                .find("p.teaser").text();

                result.imgLink = $(this).children(".item-image")
                .find("a").find("img").attr("src");
            // push object into the result array
                if (result.title && result.link && result.teaser && result.imgLink) {
                    articles.push(result);
                }
            });
        })

        // Needed to respond to request
        res.json("scraped")
    },