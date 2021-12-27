module.exports = {
    app: {
        px: 'ac!',
        token: 'OTI1MDU5ODQ4MzY4OTUxMzI2.YcnnHg.NApFQs9WB026u6euwQSn4-DUpxQ',
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
