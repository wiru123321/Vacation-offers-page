import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";

        this.get("/offers", () => {
            return {
                offers: [
                    {
                        id: 1,
                    },
                    {
                        id: 2,
                    },
                    {
                        id: 3,
                    },
                ],
            };
        });
    },
});
