const log4js = require('log4js');
//--------------------------------------------
log4js.configure({
        appenders: {
            cheeseLogs: {
                type: "file",
                filename: 'server/utils/logs/access.log',
                pattern: "_yyyy-MM-dd",
                maxLogSize: 1024 * 1024 * 100,
                backups: 3,
                alwaysIncludePattern: false,
                category: 'normal'
            },
            console: {type: 'console'}
        },
        categories: {
            cheese: { appenders: ['cheeseLogs'], level: 'error' },
            another: { appenders: ['console'], level: 'trace' },
            default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
        }
});

let logger = log4js.getLogger('normal');
exports.logger = logger;
//--------------------------------------------
exports.use = function (app) {
    app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO, format: ':method :url'}));
};