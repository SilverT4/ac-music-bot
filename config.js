module.exports = {
    app: {
        px: 'ac!',
        token: 'OTI1MDU5ODQ4MzY4OTUxMzI2.YcnnHg.IPb9X4B5H5K2_CQ67DGVSNur5d4',
        playing: 'joe mama real?'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
