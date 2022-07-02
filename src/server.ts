import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";

        this.get("/offers", () => {
            return {
                offers: [
                    {
                        id: 1,
                        subHeader: "11 Countries, 25 days",
                        header: "European Quest",
                        stars: 4.6,
                        actualPrice: "€2,877",
                        lastPrice: "€3,385",
                        image: require("./media/images/image-cart-1.png"),
                    },
                    {
                        id: 2,
                        subHeader: "2 Countries, 15 days",
                        header: "Simply Italy",
                        stars: 4.4,
                        actualPrice: "€1,832",
                        lastPrice: "€2,155",
                        image: require("./media/images/image-cart-2.png"),
                    },
                    {
                        id: 3,
                        subHeader: "1 Country, 10 days",
                        header: "Italian Espresso",
                        stars: 4.5,
                        actualPrice: "€1,245",
                        lastPrice: "€1,465",
                        image: require("./media/images/image-cart-3.png"),
                    },
                ],
            };
        });
    },
});
