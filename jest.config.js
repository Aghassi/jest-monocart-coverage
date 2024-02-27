module.exports = {
    collectCoverage: true,
    coverageProvider: 'v8',
    coverageReporters: ['none'],
    reporters: [
        ['./lib', {
            // logging: 'debug',
            name: 'Jest Monocart Coverage Report',

            outputDir: './docs/v8',

            reports: [
                'v8',
                'raw',
                'text'
            ]
        }]
    ]
};
