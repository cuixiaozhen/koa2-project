/**
 * Created by Jane on 2018-01-18.
 */

const code = require('../code/user.js');

module.exports = {

    async index(ctx) {
        await ctx.render('index', {
            title: "Koa2",
        });
    },
    async login(ctx) {
        await ctx.render('login', {
            title: "login",
            errorMsg:""
        });
    },
    async signIn(ctx) {
        if(ctx.session.userName && ctx.session.password && (ctx.session.userName == ctx.request.body.username) && (ctx.session.password == ctx.request.body.password)){
            var users = [];
            users.push({ name: 'Tobi', age: 2, species: 'ferret' })
            users.push({ name: 'Loki', age: 2, species: 'ferret' })
            users.push({ name: 'Jane', age: 6, species: 'ferret' })
            await ctx.render('list', {
                title: "list",
                users:users
            });
        }else {
            await ctx.render('login', {
                title: "login",
                errorMsg:code.USER_NAME_OR_PASSWORD_ERROR
            });
        }
    },
    async register(ctx) {
        await ctx.render('register', {
            title: "register",
        });
    },
    async registerIn(ctx) {
        ctx.session.userName = ctx.request.body.username;
        ctx.session.password = ctx.request.body.password;
        if(ctx.session.userName &&  ctx.session.password){
            await ctx.render('login', {
                title: "login",
                errorMsg:""
            });
        }
    }
};
