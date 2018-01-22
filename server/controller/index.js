
module.exports = {

    async index(ctx) {
        await ctx.render('index', {
            title: "Koa2",
        });
    }
};
