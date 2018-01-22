/**
 * Created by Jane on 2018-01-18.
 */

module.exports = {

    async index(ctx) {
        await ctx.render('index', {
            title: "Koa2",
        });
    }
};
